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
    font-size: 1rem;
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

const SecondContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1rem;
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
