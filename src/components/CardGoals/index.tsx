import toast from "react-hot-toast";
import styled from "styled-components";
import api from "../../services/api";
import { ICardGoalsProps } from "../../types";

const StyledContainer = styled.li`
  width: 500px;
  min-height: 100px;
  max-height: 105px;
  margin-bottom: 1rem;
  background-color: var(--gold);
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 98%;
  }
`;

const StyledMainContent = styled.div`
  width: 100%;
  margin-top: 0.8rem;
  display: flex;
  justify-content: space-between;
`;

const StyledPatchDiv = styled.div`
  span {
    margin-left: 2rem;
    display: flex;
    align-items: center;

    > div {
      margin-left: 5px;
    }

    @media (max-width: 600px) {
      margin-left: 0.5rem;
      > div {
      margin-left: 3px;
      }
    }

    @media (max-width: 350px) {
      margin-right: 0.8rem;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      border-radius: 100%;
      border: 1px solid black;
      cursor: pointer;
      background-color: var(--white);
    }
  }
`;

const StyledTitleDiv = styled.div`
  h1 {
    font-family: var(--title-font);
    font-size: 1.2rem;

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
`;

const StyledDeleteDiv = styled.div`
  @media (max-width: 600px) {
    width: 58px;
    display: flex;
    justify-content: flex-end;
  }

  i {
    width: 20px;
    height: 20px;

    margin-right: 2rem;

    color: var(--red);

    cursor: pointer;

    @media (max-width: 600px) {
      margin-right: 0.5rem;
    }
  }
`;

const StyledSecondContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
  padding: 0rem 2rem 0rem 2rem;
  margin-bottom: 1rem;

  h3 {
    font-size: 1.2rem;
  }

  @media (max-width: 1150px) {
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: 0rem 1.5rem 0rem 1.5rem
  }

  @media (max-width: 600px) {
    justify-content: space-between;
    flex-direction: row-reverse;
    padding: 0rem 1rem 0rem 1rem;

    h3 {
      font-size: 0.9rem;
    }
  }
`;

export const CardGoals = ({ goals, groupGoals, setGroupGoals, gettingDataFromGroups }: ICardGoalsProps) => {
  const token = JSON.parse(localStorage.getItem("token") || "null");

  const handlePatch = async (id: string, achieved: boolean) => {
    // const { id, achieved } = elm;
    const newAchieved = { achieved: !achieved };

    try {
      await api.patch(`/goals/${id}/`, newAchieved, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      toast.success("Objetivo concluido com sucesso.")
      gettingDataFromGroups()
    }
    catch {
      toast.error("Algo deu errado.")
    }
  };

  const removeFromGoals = async (id: string) => {
    try {
      await api.delete(`goals/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      toast.success("Objetivo deletado.")
      setGroupGoals(groupGoals.filter((elm) => elm.id !== id))
    }
    catch {
      toast.error("Algo deu errado.")
    }
  };

  return (
    <StyledContainer>
      <StyledMainContent>
        <StyledPatchDiv>
          <span>
            Feito
            <div
              onClick={() => handlePatch(goals.id, goals.achieved)}
            >
              {goals.achieved === true ? <i className="fas fa-check" /> : null}
            </div>
          </span>
        </StyledPatchDiv>
        <StyledTitleDiv>
          <h1>{goals.title}</h1>
        </StyledTitleDiv>
        <StyledDeleteDiv>
          <i
            onClick={() => removeFromGoals(goals.id)}
            className="fas fa-minus-circle"
          />
        </StyledDeleteDiv>
      </StyledMainContent>
      <StyledSecondContent>
        <div>
          <h3>{goals.how_much_achieved}%</h3>
        </div>
        <div>
          <h3>{goals.difficulty}</h3>
        </div>
      </StyledSecondContent>
    </StyledContainer>
  );
};
