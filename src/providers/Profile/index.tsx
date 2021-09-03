import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
import { IProfileContextData, IProviderProps, IUserInfo } from "../../types";

const ProfileContext = createContext<IProfileContextData>({} as IProfileContextData)

export const ProfileProvider = ({ children }: IProviderProps) => {
    const [userInfo, setUserInfo] = useState<IUserInfo>({} as IUserInfo)
    const [modal, setModal] = useState<boolean>(false)

    const token = JSON.parse(localStorage.getItem("token") || "null");
    const id = JSON.parse(localStorage.getItem("Id") || "null");
    
    const getUser = async () => {
        const resp = await api.get(`users/${id}/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        setUserInfo(resp.data)
    }

    const editUsername = async (item: {username: string}) => {
        try {
            await api.patch(`users/${id}/`, item, {
                headers: {
                Authorization: `Bearer ${token}`,
                },
            })
            getUser()
            toast.success("Nome editado com sucesso!")
        }
        catch {
            toast.error("Usuário já existente")
        }
      }

    return (
        <ProfileContext.Provider value={{ userInfo, getUser, modal, setModal, editUsername }}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile = () => useContext(ProfileContext)