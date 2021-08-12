import { createContext, useContext, useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'

const UserIdContext = createContext()

export const UserIdProvider = ({ children }) => {
    const [id, setId] = useState(
        JSON.parse(localStorage.getItem("Id")) || ""
    )

    useEffect(() => {
        localStorage.setItem("Id", JSON.stringify(id))
    }, [id])

    const setUserId = (token) => {
        const id = jwt_decode(token)
        setId(JSON.stringify(id.user_id))
    }

    return (
        <UserIdContext.Provider value={{ id, setUserId }}>
            {children}
        </UserIdContext.Provider>
    )
}

export const useUserId = () => useContext(UserIdContext)
