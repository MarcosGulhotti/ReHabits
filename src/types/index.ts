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
  setIsLogged: (string: string | null) => void;
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
  id: string;
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

export interface IGroupActivies {
  id: string;
  title: string;
  group: string;
  newData?: {title: string, realization_time: string, group: string}
}

export interface IFormActivitiesProps {
  groupId: string;
  setAddActivity: (value: boolean) => void;
  setGroupActivities: ([]) => void;
  groupActivities: IGroupActivies[];
  gettingDataFromGroups: () => Promise<void>;
}

export interface IInputProps {
  label: string;
  register: (string: string) => void;
  name: string;
  error: string;
  placeholder?: string;
  type?: string;
}

export interface IGroupProps {
  id: string;
  name: string;
  description: string;
  category: string;
}

export interface IFormProps {
  username: string;
  password: string;
  email?: string;
}

export interface IFormGoalsModalProps {
  groupId: string; 
  setgoalModal: (value: boolean) => void;
  setGroupGoals: (value: {id: string}[]) => void;
  groupGoals: {id: string}[];
}

export interface IFormGoalsProps {
  title: string;
  difficulty: string;
  how_much_achieved: number;
}

export interface IDataGroupProps {
  creator: {
    id: number;
  };
  name?: string;
}

export interface IFormEditGroupProps {
  setEditGroupModal: (value: boolean) => void;
}

export interface IFormEditActivitiesProps {
  modal: boolean; 
  setModal: (value: boolean) => void; 
  idActivity: string | number;
  setIdActivity: (string: string) => void;
  groupActivities: IGroupActivies[];
}

export interface IContactCardProps {
  Dados: {
    name: string;
    img: string;
    role: string;
    cellphone: string;
    linkedin: string;
    github: string;
    gitlab: string;
  };
}

export interface ICardGroupsProps {
  title: string;
  category?: string;
  handleFunction?: () => void;
}

export interface ICardGoalsProps {
  goals: any;
  groupGoals: {id: string}[];
  setGroupGoals: ([]) => void;
  gettingDataFromGroups: () => Promise<void>;
}

export interface ICardActivitiesProps {
  actv: {id: string, title: string};
  setIdActivity: (value: string) => void;
  modal: boolean;
  setModal: (value: boolean) => void;
  gettingDataFromGroups: () => Promise<void>;
}

export interface IButtonProps {
  nome: string;
  loginButton: boolean;
  width: string;
  height: string;
  func: () => void;
}

export interface IBackgroundGroupsProps {
  groupName: string;
  image: string;
  goals: {
    title: string;
    difficulty: string;
    achieved: boolean;
  }[];
  backgroundColor: string;
  activities: {
    title: string;
  }[];
}