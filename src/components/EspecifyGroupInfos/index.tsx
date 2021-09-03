import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import api from "../../services/api";
import { IDataGroupProps } from "../../types";

const StyledContainer = styled.div`
  width: 100%;
  height: 60px;

  @media (max-width: 1150px) {
    height: auto;
  }
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1150px) {
    flex-direction: column;
  }

  button {
    height: 55px;
    width: 300px;
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
      font-size: 1rem;
      height: 45px;
    }
  }

  #return {

    @media (max-width: 1150px) {
      width: 20%;
      height: 25px;
      font-size: 0.8rem;
    }
  }

  h1 {
    font-size: 3rem;

    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }
`;

export const EspecifyGroupInfos = () => {
  const [dataGroup, setDataGroup] = useState<IDataGroupProps>({} as IDataGroupProps);
  const { id } = useParams<{id: string}>();
  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("token") || "null");

  const gettingDataFromGroups = async () => {
    const resp = await api.get(`/groups/${id}/`);
    setDataGroup(resp.data);
  };

  useEffect(() => {
    gettingDataFromGroups();
    // eslint-disable-next-line
  }, []);

  const handleSubscribe = async (id: string) => {
    try {
      await api.post(`groups/${id}/subscribe/`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
          },
        })
    toast.success('Parabens, você se inscreveu.')
    }
    catch(e) {
      toast.error("Voce já é inscrito nesse canal!")
    }
  };

  return (
    <StyledContainer>
      <StyledContent>
        <button id="return" onClick={() => history.push("/groups")}>Voltar</button>
        <div>
          <h1>Nome: {dataGroup.name}</h1>
        </div>
        <button onClick={() => handleSubscribe(id)}>Inscrever-se</button>
      </StyledContent>
    </StyledContainer>
  );
};
