import { LoginProvider } from "./Login";
import { HabitsProvider } from "./Habits";
import { UserIdProvider } from "./UserId";

export const Providers = ({ children }) => {
  return (
    <LoginProvider>
      <HabitsProvider>
        <UserIdProvider>
          {children}
        </UserIdProvider>
      </HabitsProvider>
    </LoginProvider>
  );
};
