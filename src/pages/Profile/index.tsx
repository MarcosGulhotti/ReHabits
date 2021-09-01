import styled from "styled-components";
import { Menu } from "../../components/Menu";
import { UserInfo } from "../../components/UserInfo";
import { useContext, useEffect } from "react";
import { useProfile } from "../../providers/Profile";
import { ModalEditName } from "../../components/ModalEditName";
import { ProfileHabits } from "../../components/ProfileHabits";
import { Redirect } from "react-router-dom";
import { LoginContext } from "../../providers/Login";

const StyledBackground = styled.div`
  background-color: var(--background);
  min-height: calc(100vh - 55px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const StyledContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: auto;
  background-color: var(--white);
  margin: 1rem;
  overflow-x: hidden;

  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
    overflow-x: hidden;
  }
`;

export const Profile = () => {
  const { getUser, modal, setModal } = useProfile();

  const { isLogged } = useContext(LoginContext);

  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  if (isLogged === null) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Menu />
      <StyledBackground>
        <StyledContainer>
          {!modal ? (
            <>
              <UserInfo />
              <ProfileHabits />
            </>
          ) : (
            <ModalEditName setModal={setModal} />
          )}
        </StyledContainer>
      </StyledBackground>
    </>
  );
};
