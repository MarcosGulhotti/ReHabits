import { createContext, useContext, useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { IUserContextData, IProviderProps } from '../../types'

const UserIdContext = createContext<IUserContextData>({} as IUserContextData)

export const UserIdProvider = ({ children }: IProviderProps) => {
    const [id, setId] = useState(
        JSON.parse(localStorage.getItem("Id") || "null") 
    )

    useEffect(() => {
        localStorage.setItem("Id", JSON.stringify(id))
    }, [id])

    const setUserId = (token: string) => {
        const id: {user_id: string} = jwt_decode(token)
        localStorage.setItem("Id", JSON.stringify(id.user_id))
        setId(JSON.stringify(id.user_id))
    }

    return (
        <UserIdContext.Provider value={{ id, setUserId }}>
            {children}
        </UserIdContext.Provider>
    )
}

export const useUserId = () => useContext(UserIdContext)
