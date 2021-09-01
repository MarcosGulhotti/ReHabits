import { ReactNode } from 'react'

export interface IUserContextData {
  id: string;
  setUserId: (token: string) => void;
}

export interface IProfileContextData {
  userInfo: {username: string, email: string};
  getUser: () => void;
  modal: boolean;
  setModal: (boolean: boolean) => void;
  editUsername: (item: {username: string}) => void;
}

export interface ILoginContextData {
  isLogged: string | null;
  setIsLogged: (string: string) => void;
}

export interface IAddToHabits {
  newData: {
    title: string;
    category: string;
    difficulty: string;
    frequency: string;
    how_much_achieved: number;
    achieved: boolean;
    user: number;
  };
  setModal: (string: string) => void;
}

export interface IHabits {
  title: string;
  category: string;
  difficulty: string;
  frequency: string;
  how_much_achieved: number;
  achieved: boolean;
  id: number;
}

export interface IProviderProps {
  children: ReactNode;
}

export interface IHabitsContextData {
  habits: IHabits[];
  addToHabits: (newData: any, setModal: (string: string) => void) => Promise<void>;
  removeFromHabits: (eachHabits: {id: number}) => Promise<void>;
  editHabit: number;
  setEditHabit: (number: number) => void;
  editHabits: ({}) => Promise<void>;
  getHabits: () => Promise<void>;
}

export interface IDashboardButtonProps {
  nome: string;
  height?: string;
  width?: string;
  loginButton: boolean;
  func: () => void;
}

export interface IStyledButtonProps {
  height?: string;
  width?: string;
  loginButton: boolean;
}

export interface IUserInfo {
  id: number;
  username: any;
  email: any;
}

export interface ICardHabitsProps {
  eachHabits: IHabits;
  key: number;
  setModal?: any;
}

export interface IModalHabitProps {
  setModal: (string: string) => void;
}

export interface IAddToHabitsForm {
  title: string;
  category: string;
  difficulty: string;
  frequency: string;
}

export interface IModalEditNameProps {
  setModal: (value: boolean) => void;
}