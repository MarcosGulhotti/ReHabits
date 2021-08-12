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
  width: 55vw;
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
  width: 45vw;
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

// Old Button

// const Button = styled.button`
//   width: 250px;
//   height: 67px;
//   background-color: ${({ firstButton }) =>
//     firstButton ? "#ECDEB0" : "#5F6874"};
//   border: ${({ firstButton }) =>
//     firstButton ? "2px solid #000000" : "2px solid #F5F3EB"};
//   color: ${({ firstButton }) => (firstButton ? "#000000" : "#F5F3EB")};
//   box-sizing: border-box;
//   border-radius: 10px;
//   font-family: Roboto Slab;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 36px;
//   line-height: 47px;
//   &:hover {
//     cursor: pointer;
//   }
// `;

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
`;

export const Home = () => {
  const { setIsLogged } = useContext(LoginContext);
  const history = useHistory();
  const token = localStorage.getItem("token");

  const RedirectToLogin = () => {
    if (token) {
      history.push("/dashboard");
    } else {
      history.push("/login");
    }
  };

  const RedirectToRegister = () => {
    history.push("/register");
  };

  useEffect(() => {
    if (token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
    // eslint-disable-next-line
  }, []);

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
            width={"250px"}
            nome={"Login"}
            func={RedirectToLogin}
            loginButton={true}
          />
          <Button
            height={"67px"}
            width={"250px"}
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
