import { useState } from "react";
import styled from "styled-components";
import api from "../../services/api";

const Container = styled.li`
  width: 500px;
  min-height: 100px;

  margin-bottom: 1rem;

  background-color: var(--gold);

  border: 2px solid black;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 98%;
    overflow-x: hidden;
  }
`;

const MainContent = styled.div`
  width: 100%;

  margin-top: 0.8rem;

  display: flex;
  justify-content: space-between;
`;

const TitleDiv = styled.div`
  margin-left: 50%;
  transform: translateX(-50%);
  h1 {
    font-family: var(--title-font);
    font-size: 1rem;
    text-align: center;

    @media (max-width: 600px) {
      margin-left: 15px;
    }
  }
`;

const DeleteDiv = styled.div`
  i {
    width: 20px;
    height: 20px;

    margin-right: 2rem;

    color: var(--red);

    cursor: pointer;
  }
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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

    &:hover {
      filter: brightness(110%);
    }
  }
`;

export const CardActivity = ({
  actv,
  idActivity,
  setIdActivity,
  modal,
  setModal,
}) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const [groupActivities, setGroupActivities] = useState([]);

  const removeFromActivities = (id) => {
    api
      .delete(`activities/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() =>
        setGroupActivities(groupActivities.filter((elm) => elm.id !== id))
      )
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Container>
        <MainContent>
          <TitleDiv>
            <h1>{actv.title}</h1>
          </TitleDiv>
          <DeleteDiv>
            <i
              onClick={() => removeFromActivities(actv.id)}
              class="fas fa-minus-circle"
            />
          </DeleteDiv>
        </MainContent>
        <ButtonDiv>
          <button
            onClick={() => {
              setModal(!modal);
              setIdActivity(actv.id);
            }}
          >
            Editar
          </button>
        </ButtonDiv>
      </Container>
    </>
  );
};
