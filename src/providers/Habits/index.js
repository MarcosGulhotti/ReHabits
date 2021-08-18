import { createContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
const token = JSON.parse(localStorage.getItem("token"));

export const HabitsContext = createContext([]);

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const [editHabit, setEditHabit] = useState("")
  
  const getHabits = () => {
    api
      .get(`habits/personal/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setHabits(response.data))
      .catch((err) => console.log(err))
  }

  const addToHabits = (item, setModal) => {
    console.log(item)
    api
      .post(`habits/`, item, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        getHabits()
        toast.success("Hábito adicionado");
      })
      .catch(() => toast.error("Algo deu errado"));

    setModal('closed');
  };

  const removeFromHabits = (habit) => {
    api
      .delete(`habits/${habit.id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        getHabits()
        toast.success("Hábito removido");
      })
      .catch((err) => console.log(err));
  };

  const editHabits = (item) => {
    api
      .patch(`habits/${editHabit}/`, item, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        getHabits()
        toast.success("Hábito atualizado")
      })
      .catch(() => toast.error("Algo deu errado"))
  }

  return (
    <HabitsContext.Provider value={{ habits, addToHabits, removeFromHabits, editHabit, setEditHabit, editHabits, getHabits }}>
      {children}
    </HabitsContext.Provider>
  );
};
