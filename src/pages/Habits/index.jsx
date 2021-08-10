import { Menu } from "../../components/Menu";
import styled from "styled-components";
import { HabitsContext } from "../../providers/Habits";
import { useContext } from "react";

const Content = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 800px;
  background-color: var(--white);
  border-radius: 10px;
  margin-top: 1rem;

  h1 {
    font-family: var(--font-title);
    margin-top: 1rem;
  }
`;

const Container = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Habits = () => {
  const { Habits } = useContext(HabitsContext);

  return (
    <>
      <Menu />
      <Container>
        <Content>
          <h1>Seus Hábitos</h1>
          {Habits}
        </Content>
      </Container>
    </>
  );
};
