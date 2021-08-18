import { useEffect, useState } from "react";
import styled from "styled-components";
import { CardGoals } from "../CardGoals";
import { FormGoalsModal } from "../../components/FormGoalsModal";
import api from "../../services/api";
import { useParams } from "react-router";

const Container = styled.div`
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
const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 3rem;
  h2 {
    font-size: 2.5rem;
  }
`;
const ListUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  list-style: none;

  width: 100%;
  max-height: 550px;

  overflow: auto;

  margin-bottom: 20px;
`;
const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
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
  const { id } = useParams();
  const [modal, setModal] = useState(false);
  const [groupGoals, setGroupGoals] = useState([]);

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
          <Container style={{ alignItems: "center", justifyContent: "center" }}>
            <TitleDiv>
              <h2>Objetivos</h2>
            </TitleDiv>
            <FormGoalsModal
              groupGoals={groupGoals}
              setGroupGoals={setGroupGoals}
              setgoalModal={setModal}
              groupId={id}
            />
            <ButtonDiv>
              <Button
                style={{ marginTop: "2rem" }}
                onClick={() => setModal(!modal)}
              >
                Voltar
              </Button>
            </ButtonDiv>
          </Container>
        </>
      ) : (
        <Container>
          <TitleDiv>
            <h2>Objetivos</h2>
          </TitleDiv>
          <ListUl>
            {groupGoals.map((goals) => (
              <CardGoals
                key={goals.id}
                goals={goals}
                groupGoals={groupGoals}
                setGroupGoals={setGroupGoals}
                gettingDataFromGroups={gettingDataFromGroups}
              />
            ))}
          </ListUl>
          <ButtonDiv>
            <Button onClick={() => setModal(!modal)}>Criar Objetivo</Button>
          </ButtonDiv>
        </Container>
      )}
    </>
  );
};
