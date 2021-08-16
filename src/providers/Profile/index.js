import { createContext, useContext, useState } from "react";
import api from "../../services/api";

const ProfileContext = createContext()

export const ProfileProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({})
    const [modal, setModal] = useState(false)

    const token = JSON.parse(localStorage.getItem("token"));
    const id = JSON.parse(localStorage.getItem("Id"));

    const getUser = () => {
        api
            .get(`users/${id}/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => setUserInfo(response.data))
            .catch((err) => console.log(err))
    }

    const editUsername = (item) => {
        api
            .patch(`users/${id}/`, item, {
                headers: {
                Authorization: `Bearer ${token}`,
                },
            })
            .then(() => getUser())
            .catch((e) => console.log(e))
      }

    return (
        <ProfileContext.Provider value={{ userInfo, getUser, modal, setModal, editUsername }}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile = () => useContext(ProfileContext)