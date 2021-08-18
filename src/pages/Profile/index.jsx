import styled from "styled-components";
import { Menu } from "../../components/Menu";
import { UserInfo } from "../../components/UserInfo";
import { useContext, useEffect } from "react";
import { useProfile } from "../../providers/Profile";
import { ModalEditName } from "../../components/ModalEditName";
import { ProfileHabits } from "../../components/ProfileHabits";
import { Redirect } from "react-router-dom";
import { LoginContext } from "../../providers/Login";

const Background = styled.div`
  background-color: var(--background);
  min-height: calc(100vh - 55px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: auto;
  background-color: var(--white);
  margin: 1rem;

  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
    overflow-x: hidden;
  }
`;

export const Profile = () => {
  const { getUser, modal, setModal } = useProfile();

  const { isLogged, setIsLogged } = useContext(LoginContext);

  const token = localStorage.getItem("token");

  const authenticate = () => {
    if (token !== "") {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  };

  useEffect(() => {
    getUser();
    authenticate();
    // eslint-disable-next-line
  }, []);

  if (!isLogged) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Menu />
      <Background>
        <Container>
          {!modal ? (
          <>
            <UserInfo />
            <ProfileHabits />
          </>
          ) : (
          <ModalEditName setModal={setModal} />
          )}
        </Container>
      </Background>
    </>
  );
};
