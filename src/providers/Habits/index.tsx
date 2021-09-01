import { createContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
import { IAddToHabits, IHabits, IHabitsContextData, IProviderProps } from "../../types";
const token = JSON.parse(localStorage.getItem("token") || "null");

export const HabitsContext = createContext({} as IHabitsContextData);

export const HabitsProvider = ({ children }: IProviderProps) => {
  const [habits, setHabits] = useState<IHabits[]>([]);
  const [editHabit, setEditHabit] = useState<number>(0)
  
  const getHabits = async () => {
    const resp = await api.get(`habits/personal/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    setHabits(resp.data)
  }

  const addToHabits = async ({ newData, setModal }: IAddToHabits) => {
    try {
      await api.post(`habits/`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      getHabits()
      toast.success("Hábito adicionado")
      setModal('closed')
    }
    catch {
      toast.error("Algo deu errado ao adicionar")
    }
  };

  const removeFromHabits = async (habit : {id: number}) => {
    await api.delete(`habits/${habit.id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    getHabits()
    toast.success("Hábito removido");
  };

  const editHabits = async (item: {}) => {
    try { 
      await api.patch(`habits/${editHabit}/`, item, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      getHabits()
      toast.success("Hábito atualizado")
    }
    catch{
      toast.error("Algo deu errado ao editar")
    }
  }

  return (
    <HabitsContext.Provider value={{ habits, addToHabits, removeFromHabits, editHabit, setEditHabit, editHabits, getHabits }}>
      {children}
    </HabitsContext.Provider>
  );
};
