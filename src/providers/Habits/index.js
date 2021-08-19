import { createContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
const token = JSON.parse(localStorage.getItem("token"));

export const HabitsContext = createContext([]);

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const [editHabit, setEditHabit] = useState("")
  
  const getHabits = async () => {
    const resp = await api.get(`habits/personal/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    setHabits(resp.data)
  }

  const addToHabits = async (item, setModal) => {
    try {
      await api.post(`habits/`, item, {
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

  const removeFromHabits = async (habit) => {
    await api.delete(`habits/${habit.id}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    getHabits()
    toast.success("Hábito removido");
  };

  const editHabits = async (item) => {
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
