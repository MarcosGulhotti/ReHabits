import { Menu } from "../../components/Menu";
import { ModalGoals } from "../../components/ModalGoals";
import { EspecifyGroupInfos } from "../../components/EspecifyGroupInfos";
import { ModalActivity } from "../../components/ModalActivity";
import { FormEditGroup } from "../../components/FormEditGroup";
import { useContext, useState } from "react";
import styled from "styled-components";
import { LoginContext } from "../../providers/Login";
import { Redirect } from "react-router-dom";

const StyledButton = styled.button`
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

const StyledButtonDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const StyledContent = styled.div`
  width: 100%;
  margin: 1rem;
  background-color: var(--white);
  border-radius: 15px;
  padding: 1.5rem;

  @media (max-width: 600px) {
    margin: 1rem 0rem 1rem 0rem;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  background-color: var(--background);
`;

const StyledGroupContent = styled.div`
  display: flex;
  justify-content: space-around;

  @media (max-width: 1300px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const SpecifyGroup = () => {
  const [editGroupModal, setEditGroupModal] = useState(false);

  const { isLogged } = useContext(LoginContext);

  if (isLogged === null) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Menu />
      <StyledContainer>
        <StyledContent>
          <EspecifyGroupInfos />

          <StyledButtonDiv>
            <StyledButton onClick={() => setEditGroupModal(!editGroupModal)}>
              Editar categoria
            </StyledButton>
          </StyledButtonDiv>

          <StyledGroupContent>
            <ModalGoals />
            <ModalActivity />
          </StyledGroupContent>

          {editGroupModal && (
            <FormEditGroup setEditGroupModal={setEditGroupModal} />
          )}
        </StyledContent>
      </StyledContainer>
    </>
  );
};
