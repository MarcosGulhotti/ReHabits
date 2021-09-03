import { createContext, useState } from "react";
import { ILoginContextData, IProviderProps } from "../../types";

export const LoginContext = createContext<ILoginContextData>({} as ILoginContextData);

export const LoginProvider = ({ children }: IProviderProps) => {
  const [isLogged, setIsLogged] = useState(localStorage.getItem("token"));

  return (
    <LoginContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </LoginContext.Provider>
  );
};
