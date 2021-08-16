import styled from "styled-components";
import { StyledBackgroundGroups } from "../BackgroundGroups";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { CardGroup } from "../CardGroup";
import { useHistory } from "react-router";

export const StyledGroupList = styled.ul`
  @media (min-width: 280px) {
    display: flex;
    margin: 0;
    width: 100%;
    align-items: center;
    flex-direction: column;
  }
  @media (min-width: 768px) {
    width: 80%;
    margin: 0 auto;
    height: 75%;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    overflow: auto;

    h2 {
      width: 100%;
    }
  }
  @media (min-width: 1024px) {
    height: 85%;
  }
  @media (min-width: 1200px) {
    height: 70%;
  }
`;

export const StyledGoalsActivitiesList = styled.ul`
  width: 100%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 550px;
  overflow: auto;
  margin-bottom: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const GroupList = () => {
  const [groups, setGroups] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));
  const [showMyGroups, setShowMyGroups] = useState(false);
  const [myGroups, setMyGroups] = useState([]);
  const history = useHistory();

  useEffect(() => {
    api.get("/groups/").then((resp) => setGroups(resp.data.results));
  }, []);

  const enterGroupInterface = (id) => {
    history.push(`/${id}`);
  };

  const getMyGroups = async () => {
    const response = await api.get("/groups/subscriptions/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setMyGroups(response.data);
    setShowMyGroups(!showMyGroups);
  };

  return (
    <StyledBackgroundGroups background="#F5F3EB">
      <div className="containerGroups">
        <div id="headerPosition">
          <h1>Grupos</h1>
          <button className="myGroups" onClick={getMyGroups}>
            {showMyGroups ? "Todos os grupos" : "Meus grupos"}
          </button>
        </div>
        {!showMyGroups ? (
          <StyledGroupList>
            {groups?.map((el) => (
              <CardGroup
                key={el.id}
                title={el.name}
                category={el.category}
                handleFunction={() => enterGroupInterface(el.id)}
              />
            ))}
          </StyledGroupList>
        ) : (
          <StyledGroupList>
            {myGroups?.map((el) => (
              <CardGroup key={el.id} title={el.name} category={el.category} />
            ))}
          </StyledGroupList>
        )}
        <button className="back" onClick={() => history.push("/dashboard")}>
          Voltar
        </button>
      </div>
    </StyledBackgroundGroups>
  );
};
