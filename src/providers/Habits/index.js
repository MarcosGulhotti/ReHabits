import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
const token = JSON.parse(localStorage.getItem("token"));

export const HabitsContext = createContext([]);

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);

  const getHabits = () => {
    api
      .get("habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        setHabits(resp.data);
        localStorage.setItem("Habits", JSON.stringify(habits));
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getHabits();
  }, []);

  const addToHabits = (item, setModal, modal) => {
    api
      .post(`habits/`, item, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        setHabits([...habits, resp.data]);
        localStorage.setItem("Habits", JSON.stringify(habits));
        toast.success("Hábito Adicionado");
      })
      .catch((e) => console.log(e));

    setModal(!modal);
  };

  const removeFromHabits = (habit) => {
    api
      .delete(`habits/${habit.id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() =>
        setHabits(habits.filter((habitItem) => habitItem.id !== habit.id))
      )
      .catch((e) => console.log(e));
  };

  return (
    <HabitsContext.Provider value={{ habits, addToHabits, removeFromHabits }}>
      {children}
    </HabitsContext.Provider>
  );
};
