import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
const token = JSON.parse(localStorage.getItem("token"));

export const HabitsContext = createContext([]);

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const [editHabit, setEditHabit] = useState("")

  useEffect(() => {
    api
      .get(`habits/personal/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setHabits(response.data))
      .catch((err) => console.log(err))
  }, [])
  
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
      .then(() => getHabits())
      .catch((e) => console.log(e));

    toast.success("Hábito Adicionado");
    setModal('closed');
  };

  const removeFromHabits = (habit) => {
    api
      .delete(`habits/${habit.id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => getHabits())
      .catch((e) => console.log(e));
  };

  const editHabits = (item) => {
    api
      .patch(`habits/${editHabit}/`, item, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => getHabits())
      .catch((e) => console.log(e))
  }

  return (
    <HabitsContext.Provider value={{ habits, addToHabits, removeFromHabits, editHabit, setEditHabit, editHabits }}>
      {children}
    </HabitsContext.Provider>
  );
};
