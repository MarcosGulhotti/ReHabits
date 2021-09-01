import { LoginProvider } from "./Login";
import { HabitsProvider } from "./Habits";
import { UserIdProvider } from "./UserId";
import { ProfileProvider } from "./Profile";
import { IProviderProps } from '../types'

export const Providers = ({ children }: IProviderProps) => {
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
