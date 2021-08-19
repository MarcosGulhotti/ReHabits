import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import api from "../../services/api";
import { CardActivity } from "../CardActivity";
import { FormEditActivity } from "../FormEditActivity";
import { FormActivitiesModal } from "../FormActivitiesModal";

const StyledContainer = styled.div`
  width: 550px;
  height: 700px;
  padding: 1rem;
  background-color: #c4c4c4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;

  @media (max-width: 1300px) {
    margin-top: 2rem;
  }

  @media (max-width: 600px) {
    width: 107%;
    margin-top: 2rem;
  }

  button {
    height: 30px;
    width: 40%;
    border-radius: 7px;
    border: 2px solid black;
    background-color: var(--gray);
    font-size: 1rem;
    font-weight: bold;
    margin: 15px 0px 10px 0px;
    cursor: pointer;
    transition: filter 0.2s;
    font-family: var(--font-button);

    @media (max-width: 600px) {
      width: 80%;
    }
  }

  button:hover {
    filter: brightness(110%);
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

  button {
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
  }
`;

export const ModalActivity = () => {
  const [groupActivities, setGroupActivities] = useState([]);
  const { id } = useParams();
  const [idActivity, setIdActivity] = useState("");
  const [addActivity, setAddActivity] = useState(false);
  const [modal, setModal] = useState(false);

  const gettingDataFromGroups = async () => {
    const respActivities = await api.get(`/activities/?group=${id}`);
    setGroupActivities(respActivities.data.results);
  };

  useEffect(() => {
    gettingDataFromGroups();
    // eslint-disable-next-line
  }, []);

  return (
    <StyledContainer>
      <StyledTitleDiv>
        <h2>Atividades</h2>
      </StyledTitleDiv>

      {!addActivity && (
        <StyledListUl>
          {!modal &&
            groupActivities.map((actv) => (
              <CardActivity
                modal={modal}
                setModal={setModal}
                key={actv.id}
                actv={actv}
                setIdActivity={setIdActivity}
                idActivity={idActivity}
                gettingDataFromGroups={gettingDataFromGroups}
              />
            ))}
          {modal && (
            <FormEditActivity
              modal={modal}
              setModal={setModal}
              idActivity={idActivity}
              setIdActivity={setIdActivity}
              groupActivities={groupActivities}
            />
          )}
        </StyledListUl>
      )}
      {addActivity && (
        <StyledListUl>
          <FormActivitiesModal
            groupId={id}
            addActivity={addActivity}
            setAddActivity={setAddActivity}
            setGroupActivities={setGroupActivities}
            groupActivities={groupActivities}
            gettingDataFromGroups={gettingDataFromGroups}
          />
        </StyledListUl>
      )}

      {addActivity ? (
        <StyledButtonDiv>
          <button
            onClick={() => setAddActivity(!addActivity)}
            className="createGoalsButton"
          >
            Voltar
          </button>
        </StyledButtonDiv>
      ) : (
        <StyledButtonDiv>
          <button
            onClick={() => setAddActivity(!addActivity)}
            className="createGoalsButton"
          >
            Criar Atividade
          </button>
        </StyledButtonDiv>
      )}
    </StyledContainer>
  );
};
