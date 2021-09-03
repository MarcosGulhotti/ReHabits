import { useEffect, useState } from "react";
import styled from "styled-components";
import { CardGoals } from "../CardGoals";
import { FormGoalsModal } from "../FormGoalsModal";
import api from "../../services/api";
import { useParams } from "react-router";

const StyledContainer = styled.div`
  width: 550px;
  height: 700px;
  padding: 1rem;
  background-color: #c4c4c4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;

  @media (max-width: 600px) {
    width: 107%;
  }
`;

const StyledTitleDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 3rem;
  h2 {
    font-size: 2.5rem;
  }
`;

const StyledListUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  width: 100%;
  max-height: 550px;
  overflow: auto;
  margin-bottom: 20px;
`;

const StyledButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledButton = styled.button`
  height: 55px;
  width: 40%;
  border-radius: 7px;
  border: 2px solid black;
  background-color: var(--gold);
  font-size: 1.5rem;
  font-weight: bold;
  margin: 15px 0px 10px 0px;
  cursor: pointer;
  transition: filter 0.2s;
  font-family: var(--font-button);

  &:hover {
    filter: brightness(110%);
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const ModalGoals = () => {
  const { id } = useParams<{id: string}>();
  const [modal, setModal] = useState<boolean>(false);
  const [groupGoals, setGroupGoals] = useState<{id: string}[]>([]);

  const gettingDataFromGroups = async () => {
    const respGoals = await api.get(`/goals/?group=${id}`);
    setGroupGoals(respGoals.data.results);
  };

  useEffect(() => {
    gettingDataFromGroups();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {modal ? (
        <>
          <StyledContainer style={{ alignItems: "center", justifyContent: "center" }}>
            <StyledTitleDiv>
              <h2>Objetivos</h2>
            </StyledTitleDiv>
            <FormGoalsModal
              groupGoals={groupGoals}
              setGroupGoals={setGroupGoals}
              setgoalModal={setModal}
              groupId={id}
            />
            <StyledButtonDiv>
              <StyledButton
                style={{ marginTop: "2rem" }}
                onClick={() => setModal(!modal)}
              >
                Voltar
              </StyledButton>
            </StyledButtonDiv>
          </StyledContainer>
        </>
      ) : (
        <StyledContainer>
          <StyledTitleDiv>
            <h2>Objetivos</h2>
          </StyledTitleDiv>
          <StyledListUl>
            {groupGoals.map((goals) => (
              <CardGoals
                key={goals.id}
                goals={goals}
                groupGoals={groupGoals}
                setGroupGoals={setGroupGoals}
                gettingDataFromGroups={gettingDataFromGroups}
              />
            ))}
          </StyledListUl>
          <StyledButtonDiv>
            <StyledButton onClick={() => setModal(!modal)}>Criar Objetivo</StyledButton>
          </StyledButtonDiv>
        </StyledContainer>
      )}
    </>
  );
};
