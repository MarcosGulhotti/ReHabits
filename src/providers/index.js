import { LoginProvider } from "./Login"

export const Providers = ({ children }) => {
  return(
    <LoginProvider>
      {children}
    </LoginProvider>
  )
}