import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { StyledBackgroundGroups } from "../../components/BackgroundGroups";
import { Menu } from "../../components/Menu";
import api from "../../services/api";
import { StyledGoalsActivitiesList } from "../../components/GroupList";
import { StyledCardGoals } from "../../components/CardGroup";
import { CheckBox, CheckBoxDiv, InfosDiv } from "../../components/CardGroup";
import { FormGoalsModal } from "../../components/FormGoalsModal";

export const SpecifyGroup = () => {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [dataGroup, setDataGroup] = useState([]);
  const history = useHistory();
  const [groupGoals, setGroupGoals] = useState([]);
  const [groupActivities, setGroupActivities] = useState([]);
  const [goalModal, setgoalModal] = useState(false);

  const handleSubscribe = async (id) => {
    await api.post(
      `/groups/${id}/subscribe/`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  };

  const gettingDataFromGroups = async () => {
    const resp = await api.get(`/groups/${id}/`);
    setDataGroup(resp.data);
    const respGoals = await api.get(`/goals/?group=${id}`);
    setGroupGoals(respGoals.data.results);
    const respActivities = await api.get(`/activities/?group=${id}`);
    setGroupActivities(respActivities.data.results);
  };

  useEffect(() => {
    gettingDataFromGroups();
    // eslint-disable-next-line
  }, []);

  const handlePatch = (elm) => {
    const newToken = JSON.parse(token);
    const { id, achieved } = elm;
    const newAchieved = { achieved: !achieved };

    api
      .patch(`/goals/${id}/`, newAchieved, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${newToken}`,
        },
      })
      .then((_) => {})
      .catch((e) => console.log(e));

    gettingDataFromGroups();
  };

  const removeFromGoals = (id) => {
    const newToken = JSON.parse(token);

    api
      .delete(`goals/${id}/`, {
        headers: {
          Authorization: `Bearer ${newToken}`,
        },
      })
      .then((resp) => setGroupGoals(groupGoals.filter(elm => elm.id !== id)))
      .catch((e) => console.log(e));
  };

  return (
    <>
      <Menu />
      <StyledBackgroundGroups>
        <div id="headerPositionSpecify">
          <button
            onClick={() =>
              goalModal ? setgoalModal(!goalModal) : history.push("/groups")
            }
          >
            Voltar
          </button>
          <h1>{dataGroup.name}</h1>
          <button onClick={() => handleSubscribe(id)}>Inscrever-se</button>
        </div>
        <div className="goalsActivitiesContainerList">
          <h2>Objetivos</h2>
          {goalModal ? (
            <>
              <FormGoalsModal
                groupGoals={groupGoals}
                setGroupGoals={setGroupGoals}
                setgoalModal={setgoalModal}
                groupId={id}
              />
            </>
          ) : (
            <>
              <StyledGoalsActivitiesList>
                {groupGoals?.map((el) => (
                  <StyledCardGoals key={el.id}>
                    <CheckBoxDiv>
                      <span>Feito</span>
                      <CheckBox
                        achieved={el.achieved}
                        onClick={() => handlePatch(el)}
                      >
                        {el.achieved === true ? (
                          <i class="fas fa-check"></i>
                        ) : null}
                      </CheckBox>
                      <h1>{el.title}</h1>
                      <i
                        onClick={() => removeFromGoals(el.id)}
                        class="fas fa-minus-circle"
                      />
                    </CheckBoxDiv>
                    <InfosDiv>
                      <p>{el.how_much_achieved}%</p>
                      <p>{el.difficulty}</p>
                    </InfosDiv>
                  </StyledCardGoals>
                ))}
              </StyledGoalsActivitiesList>
              <button
                onClick={() => setgoalModal(!goalModal)}
                className="createGoalsButton"
              >
                Criar objetivo
              </button>
            </>
          )}
        </div>
      </StyledBackgroundGroups>
    </>
  );
};
