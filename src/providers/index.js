import { LoginProvider } from "./Login";
import { HabitsProvider } from "./Habits";
import { UserIdProvider } from "./UserId";
import { ProfileProvider } from "./Profile";

export const Providers = ({ children }) => {
  return (
    <LoginProvider>
      <HabitsProvider>
        <UserIdProvider>
          <ProfileProvider>
            {children}
          </ProfileProvider>
        </UserIdProvider>
      </HabitsProvider>
    </LoginProvider>
  );
};
