import styled from "styled-components";
import api from "../../services/api";

const Container = styled.li`
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
const MainContent = styled.div`
  width: 100%;

  margin-top: 0.8rem;

  display: flex;
  justify-content: space-between;
`;
const PatchDiv = styled.div`
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
const TitleDiv = styled.div`
  h1 {
    font-family: var(--title-font);
    font-size: 1.2rem;

    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }

`;

const DeleteDiv = styled.div`
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

const SecondContent = styled.div`
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

export const CardGoals = ({
  goals,
  groupGoals,
  setGroupGoals,
  gettingDataFromGroups,
}) => {
  const token = JSON.parse(localStorage.getItem("token"));

  const handlePatch = (elm) => {
    const { id, achieved } = elm;
    const newAchieved = { achieved: !achieved };

    api
      .patch(`/goals/${id}/`, newAchieved, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => gettingDataFromGroups())
      .catch((e) => console.log(e));
  };

  const removeFromGoals = (id) => {
    api
      .delete(`goals/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => setGroupGoals(groupGoals.filter((elm) => elm.id !== id)))
      .catch((e) => console.log(e));
  };

  return (
    <Container>
      <MainContent>
        <PatchDiv>
          <span>
            Feito
            <div
              onClick={() => handlePatch(goals)}
              achieved={goals.achieved.toString()}
            >
              {goals.achieved === true ? <i class="fas fa-check" /> : null}
            </div>
          </span>
        </PatchDiv>
        <TitleDiv>
          <h1>{goals.title}</h1>
        </TitleDiv>
        <DeleteDiv>
          <i
            onClick={() => removeFromGoals(goals.id)}
            class="fas fa-minus-circle"
          />
        </DeleteDiv>
      </MainContent>
      <SecondContent>
        <div>
          <h3>{goals.how_much_achieved}%</h3>
        </div>
        <div>
          <h3>{goals.difficulty}</h3>
        </div>
      </SecondContent>
    </Container>
  );
};
