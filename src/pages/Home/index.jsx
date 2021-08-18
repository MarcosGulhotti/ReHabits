import imageHome from "../../Assets/img/Home Page.svg";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../providers/Login";
import { Button } from "../../components/Button";

const StyledLeftContainer = styled.div`
  background-color: var(--white);
  width: 60vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 0;
    height: 0;
  }
`;

const StyledRightContainer = styled.div`
  background-color: var(--background);
  width: 40vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
  }
`;

const StyledHomePageContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledTitle = styled.h1`

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

const StyledButtonContainer = styled.div`

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

const StyledParagraph = styled.p`
  font-family: var(--font-text);
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: var(--white);
  margin: 30px 60px 30px 60px;

  @media (max-width: 768px) {
    margin: 30px 10px 30px 10px;
  }
`;

const StyledImage = styled.img`
  width: 75%;

  @media (max-width: 768px) {
    width: 0;
    height: 0;
  }
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
    <StyledHomePageContainer>
      <StyledLeftContainer>
        <StyledImage src={imageHome} alt="HomePage" />
      </StyledLeftContainer>
      <StyledRightContainer>
        <StyledTitle>Re-Habits</StyledTitle>
        <StyledButtonContainer>
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
        </StyledButtonContainer>
        <StyledParagraph>
          Venha fazer parte da maior comunidade de Hábitos do mundo! Aqui você
          consegue se reunir com pessoas que querem adiquirir ou recuperar
          Hábitos igual a você.
        </StyledParagraph>
      </StyledRightContainer>
    </StyledHomePageContainer>
  );
};
