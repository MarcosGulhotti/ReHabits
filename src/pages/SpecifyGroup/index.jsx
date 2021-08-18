import { Menu } from "../../components/Menu";

// New Imports
import { ModalGoals } from "../../components/ModalGoals";
import { EspecifyGroupInfos } from "../../components/EspecifyGroupInfos";
import { ModalActivity } from "../../components/ModalActivity";
import { FormEditGroup } from "../../components/FormEditGroup";
import { useContext, useState } from "react";
import styled from "styled-components";
import { LoginContext } from "../../providers/Login";
import { Redirect } from "react-router-dom";

const Button = styled.button`
  height: 30px;
  width: 200px;
  border-radius: 7px;
  border: 2px solid black;
  background-color: var(--gold);
  font-size: 1rem;
  font-weight: bold;
  margin: 15px 0px 10px 0px;
  cursor: pointer;
  transition: filter 0.2s;
  font-family: var(--font-button);

  &:hover {
    filter: brightness(110%);
  }
`;

const ButtonDiv = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  width: 1750px;
  height: 1000px;

  background-color: var(--white);

  border-radius: 15px;

  padding: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: auto;

  background-color: var(--background);
`;

const GroupContent = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const SpecifyGroup = () => {
  const [editGroupModal, setEditGroupModal] = useState(false);

  const { isLogged } = useContext(LoginContext);

  if (isLogged === undefined) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Menu />
      <Container>
        <Content>
          <EspecifyGroupInfos />

          <ButtonDiv>
            <Button onClick={() => setEditGroupModal(!editGroupModal)}>
              Editar categoria
            </Button>
          </ButtonDiv>

          <GroupContent>
            <ModalGoals />
            <ModalActivity />
          </GroupContent>

          {editGroupModal && (
            <FormEditGroup setEditGroupModal={setEditGroupModal} />
          )}
        </Content>
      </Container>
    </>
  );
};
