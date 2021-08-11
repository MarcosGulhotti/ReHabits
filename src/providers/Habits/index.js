import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
const token = JSON.parse(localStorage.getItem("token"));

export const HabitsContext = createContext([]);

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState(
    JSON.parse(localStorage.getItem("Habits")) || []
  );

  useEffect(() => {
    localStorage.setItem("Habits", JSON.stringify(habits));
  }, [habits]);

  const addToHabits = (item, setModal, modal) => {
    console.log(item);
    api
      .post(`habits/`, item, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => setHabits([...habits, resp.data]))
      .catch((e) => console.log(e));

    toast.success("Hábito Adicionado");
    setModal(!modal);
  };

  const removeFromHabits = (habit) => {
    console.log(habit);
    api
      .delete(`habits/${habit.id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => setHabits(habits.filter((habitItem) => habitItem.id !== habit.id)))
      .catch((e) => console.log(e));
  };

  return (
    <HabitsContext.Provider value={{ habits, addToHabits, removeFromHabits }}>
      {children}
    </HabitsContext.Provider>
  );
};
