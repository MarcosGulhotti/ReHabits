import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";

export const HabitsContext = createContext([]);

export const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState(
    JSON.parse(localStorage.getItem("Habits")) || []
  );

  api
    .get("/habits/personal")
    .then((resp) => setHabits(resp))
    .catch((e) => console.log(e));

  useEffect(() => {
    localStorage.setItem("Habits", JSON.stringify(habits));
  }, [habits]);

  const addToHabits = (item, setModal) => {
    if (!habits.includes(item)) {
      setHabits([...habits, item]);
      toast.success("Hábito Adicionado");
      setModal(false);
    } else {
      toast.error("Hábito já praticado!");
      setModal(false);
    }
  };

  const removeFromHabits = (item) => {
    // const newHabits = habits.filter((elm) => elm.title !== item.title);
    // toast("Hábito removido", {
    //   icon: "😭",
    // });
    // setHabits(newHabits);
    api
      .delete(`/habits/${item.user}`)
      .then((resp) => console.log(resp))
      .catch((e) => console.log(e));
  };

  return (
    <HabitsContext.Provider value={{ habits, addToHabits, removeFromHabits }}>
      {children}
    </HabitsContext.Provider>
  );
};
