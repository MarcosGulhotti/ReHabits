import { useContext } from "react";
import { useHistory } from "react-router";
import { Menu } from "../../components/Menu";
import { LoginContext } from "../../providers/Login";
import styled from "styled-components";
import MenuDashboard from "../../Assets/img/Menu Dashboard.jpg";
import Atividades from "../../Assets/img/Atividades.png";
import GroupDashbord from "../../Assets/img/Groups Dashboard.jpg";
import { DashboardButton } from "../../components/DashboardButton";
import { Redirect } from "react-router-dom";

const StyledTopContainer = styled.div`

  @media (min-width: 280px) {
    width: 100vw;
    height: calc(35vh - 55px);
    background-color: var(--background);
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
  }

  @media (min-width: 768px) {
    height: calc(31vh - 55px);
  }

  @media (min-width: 1024px) {
    height: calc(50vh - 55px);
  }
`;

const StyledBottomContainer = styled.div`

  @media (min-width: 280px) {
    width: 100vw;
    height: calc(65vh);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--background);
  }

  @media (min-width: 768px) {
    height: calc(69vh);
    background-color: var(--background);
  }

  @media (min-width: 1024px) {
    height: 50vh;
    background-color: var(--white);
    flex-direction: row;
  }
`;

const StyledParagraphContainer = styled.div`

  @media (min-width: 280px) {
    width: 100vw;
    heigth: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 1024px) {
    margin: 0 0 0 120px;
    height: 60%;
    width: 60vw;
  }

  p {
    @media (min-width: 280px) {
      font-family: var(--font-text);
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 28px;
      color: var(--white);
      text-align: center;
      margin: 0 20px 20px 5px;
    }

    @media (min-width: 768px) {
      font-size: 20px;
      line-height: 28px;
    }

    @media (min-width: 1024px) {
      font-size: 24px;
      margin: 30px 60px 30px 60px;
    }
  }
`;

const StyledTitle = styled.h1`

  @media (min-width: 280px) {
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    color: var(--white);
    font-family: var(--font-title);
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 35px;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    font-size: 70px;
    line-height: 84px;
  }

  @media (min-width: 1024px) {
    font-size: 44px;
  }
`;

const StyledImageMenuDashboardContainer = styled.div`

  @media (min-width: 280px) {
    width: 0;
    height: 0;
  }

  @media (min-width: 1024px) {
    margin: 0 120px 0 0;
    width: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    @media (min-width: 280px) {
      width: 0;
      height: 0;
    }

    @media (min-width: 1024px) {
      border-radius: 230px;
      display: block;
      width: 230px;
      height: 230px;
      padding: 0;
      margin: 0;
      object-fit: cover;
    }
  }
`;

const StyledOtherImagesContainer = styled.div`

  @media (min-width: 280px) {
    width: 100vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-color: var(--background);
  }

  @media (min-width: 768px) {
    height: 33vh;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    height: 50vh;
    width: 50vw;
    background-color: var(--white);
  }

  img {

    @media (min-width: 280px) {
      width: 80vw;
      height: 120px;
      border-radius: 10px;
    }

    @media (min-width: 768px) {
      height: 250px;
    }

    @media (min-width: 1024px) {
      width: 50vw;
      height: 220px;
    }

    @media (min-width: 1200px) {
      width: 600px;
      height: 200px;
      object-fit: cover;
    }
  }
`;

export const Dashboard = () => {
  const history = useHistory();
  const { isLogged } = useContext(LoginContext);

  const PushToGroups = () => {
    history.push("/groups");
  };

  const PushToHabits = () => {
    history.push("/habits");
  };

  if (isLogged === null) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Menu />
      <StyledTopContainer>
        <StyledParagraphContainer>
          <StyledTitle>Aqui na Rehabits</StyledTitle>
          <p>
            Você pode criar e compartilhar hábitos com outras pessoas, entrar em
            grupos e criar metas para você mesmo, inspirando outras pessoas a
            mudarem o estilo de vida...
          </p>
        </StyledParagraphContainer>
        <StyledImageMenuDashboardContainer>
          <img src={MenuDashboard} alt="Alongamento" />
        </StyledImageMenuDashboardContainer>
      </StyledTopContainer>
      <StyledBottomContainer>
        <StyledOtherImagesContainer>
          <img src={Atividades} alt="Atividades" />
          <DashboardButton
            func={PushToHabits}
            nome="Ver Hábitos"
            loginButton={true}
          />
        </StyledOtherImagesContainer>
        <StyledOtherImagesContainer>
          <img src={GroupDashbord} alt="Corredor" />
          <DashboardButton
            loginButton={false}
            func={PushToGroups}
            nome="Ver Grupos"
          />
        </StyledOtherImagesContainer>
      </StyledBottomContainer>
    </>
  );
};
