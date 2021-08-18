import imageHome from "../../Assets/img/Home Page.svg";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useContext, useEffect } from "react";
import { LoginContext } from "../../providers/Login";
import { Button } from "../../components/Button";

const LeftContainer = styled.div`
  @media (max-width: 768px) {
    width: 0;
    height: 0;
  }
  background-color: var(--white);
  width: 60vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightContainer = styled.div`
  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
  }
  background-color: var(--background);
  width: 40vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const HomePageContainer = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
  }
  display: flex;
  flex-wrap: nowrap;
`;

const Titulo = styled.h1`
  @media (max-width: 766px) {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    color: var(--white);
    font-family: var(--font-title);
    font-style: normal;
    font-weight: normal;
    font-size: 50px;
    line-height: 84px;
    margin-top: 20px;
  }
  @media (min-width: 767px) {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    color: var(--white);
    font-family: var(--font-title);
    font-style: normal;
    font-weight: normal;
    font-size: 100px;
    line-height: 84px;
    margin-top: 20px;
  }
  @media (min-width: 1023px) {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    color: var(--white);
    font-family: var(--font-title);
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 84px;
    margin-top: 80px;
  }
`;

const ButtonContainer = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
    width: 80%;
    height: 200px;
    justify-content: space-between;
    align-items: center;
    display: flex;
  }
  @media (min-width: 1023px) {
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 1025px) {
    flex-direction: row;
    width: 80%;
    height: 67px;
    display: flex;
    justify-content: space-between;
  }
`;

const Paragraph = styled.p`
  @media (max-width: 768px) {
    margin: 30px 10px 30px 10px;
  }
  font-family: var(--font-text);
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: var(--white);
  margin: 30px 60px 30px 60px;
`;

const Image = styled.img`
  @media (max-width: 768px) {
    width: 0;
    height: 0;
  }
  width: 75%;
`;

export const Home = () => {
  const { isLogged } = useContext(LoginContext);
  const history = useHistory();

  const RedirectToLogin = () => {
    if (isLogged !== null) {
      history.push("/dashboard");
    } else {
      history.push("/login");
    }
  };

  console.log(isLogged);

  const RedirectToRegister = () => {
    history.push("/register");
  };

  return (
    <HomePageContainer>
      <LeftContainer>
        <Image src={imageHome} alt="HomePage" />
      </LeftContainer>
      <RightContainer>
        <Titulo>Re-Habits</Titulo>
        <ButtonContainer>
          <Button
            height={"67px"}
            width={"80%"}
            nome={"Login"}
            func={RedirectToLogin}
            loginButton={true}
          />
          <Button
            height={"67px"}
            width={"80%"}
            nome={"Cadastro"}
            func={RedirectToRegister}
            loginButton={false}
          />
        </ButtonContainer>
        <Paragraph>
          Venha fazer parte da maior comunidade de Hábitos do mundo! Aqui você
          consegue se reunir com pessoas que querem adiquirir ou recuperar
          Hábitos igual a você.
        </Paragraph>
      </RightContainer>
    </HomePageContainer>
  );
};
