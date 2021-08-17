import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { StyledBackgroundGroups } from "../../components/BackgroundGroups";
import { Menu } from "../../components/Menu";
import api from "../../services/api";
import { StyledGoalsActivitiesList } from "../../components/GroupList";
import { StyledCardGoals } from "../../components/CardGroup";
import { CheckBox, CheckBoxDiv, InfosDiv } from "../../components/CardGroup";
import { FormGoalsModal } from "../../components/FormGoalsModal";
import { Modal, ButtonPosition } from "../../components/ModalHabit";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../components/Input";
import { useUserId } from "../../providers/UserId";
import { FormActivitiesModal } from "../../components/FormActivitiesModal";

export const SpecifyGroup = () => {
  const { id } = useParams();
  const token = JSON.parse(localStorage.getItem("token"));
  const [dataGroup, setDataGroup] = useState([]);
  const history = useHistory();
  const [groupGoals, setGroupGoals] = useState([]);
  const [groupActivities, setGroupActivities] = useState([]);
  const [goalModal, setgoalModal] = useState(false);
  const [activitiesModal, setActivitiesModal] = useState(false);
  const [editGroupModal, setEditGroupModal] = useState(false);
  const userInfo = useUserId();

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
    const { id, achieved } = elm;
    const newAchieved = { achieved: !achieved };

    api
      .patch(`/goals/${id}/`, newAchieved, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {})
      .catch((e) => console.log(e));

    gettingDataFromGroups();
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

  const formSchema = yup.object().shape({
    category: yup.string().required("Categoria obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleEditGroup = async (data) => {
    if (dataGroup.creator.id === userInfo.id) {
      await api.patch(`/groups/${Number(id)}/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await alert("grupo editado").catch(() =>
        alert("Alguma coisa deu errada.")
      );
    } else {
      alert("Apenas o dono do grupo pode editar.");
    }
  };

  return (
    <>
      <Menu />
      <StyledBackgroundGroups
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div id="headerPositionSpecify">
          <button onClick={() => history.push("/groups")}>Voltar</button>
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
        <div className="goalsActivitiesContainerList">
          <h2>Atividades</h2>
          {activitiesModal ? (
            <FormActivitiesModal
              groupId={id}
              setActivitiesModal={setActivitiesModal}
              setGroupActivities={setGroupActivities}
              groupActivities={groupActivities}
            />
          ) : (
            <>
              <StyledGoalsActivitiesList>
                {groupActivities.map((el) => (
                  <StyledCardGoals style={{ height: `200px` }} key={el.id}>
                    {console.log(groupActivities)}
                    <CheckBoxDiv>
                      <h1>{el.title}</h1>
                      <i onClick={() => null} class="fas fa-minus-circle" />
                    </CheckBoxDiv>
                    <InfosDiv>
                      <button
                        style={{
                          height: `35px`,
                          backgroundColor: `var(--background)`,
                          color: `var(--white)`,
                          margin: `0 auto`,
                        }}
                      >
                        Editar
                      </button>
                    </InfosDiv>
                  </StyledCardGoals>
                ))}
              </StyledGoalsActivitiesList>
              <button
                onClick={() => setActivitiesModal(!activitiesModal)}
                className="createGoalsButton"
              >
                Criar Atividade
              </button>
            </>
          )}
        </div>
        <button id="editGroup" onClick={() => setEditGroupModal(true)}>
          <i class="fas fa-edit"></i>
        </button>
        {editGroupModal && (
          <Modal
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <form onSubmit={handleSubmit(handleEditGroup)}>
              <i
                onClick={() => setEditGroupModal(false)}
                class="fas fa-chevron-left"
                id="return"
              />
              <div>
                <div>
                  <Input
                    error={errors.category?.message}
                    name="category"
                    register={register}
                    placeholder="Coloque uma categoria"
                    label="Categoria"
                  />
                </div>
              </div>
              <ButtonPosition>
                <button style={{ width: `250px` }} type="submit">
                  Editar
                </button>
              </ButtonPosition>
            </form>
          </Modal>
        )}
      </StyledBackgroundGroups>
    </>
  );
};
