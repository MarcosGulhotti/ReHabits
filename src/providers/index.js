import { LoginProvider } from "./Login";
import { HabitsProvider } from "./Habits";

export const Providers = ({ children }) => {
  return (
    <LoginProvider>
      <HabitsProvider>{children}</HabitsProvider>
    </LoginProvider>
  );
};
