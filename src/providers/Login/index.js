import { createContext, useState } from 'react'

export const LoginContext = createContext([])

export const LoginProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(undefined)

  return (
    <LoginContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </LoginContext.Provider>
  )
}