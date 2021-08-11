import { useContext } from "react";
import styled from "styled-components";
import { HabitsContext } from "../../providers/Habits";

const Container = styled.div`
  width: 100%;
  background: transparent;
  margin-bottom: 1rem;
  i {
    color: var(--red);
  }
  .Trabalho {
    background-color: #9da0ec;
    border-radius: 10px;
  }
  .Família {
    background-color: #ecab9d;
    border-radius: 10px;
  }
  .Amigos {
    background-color: #be5bec;
    border-radius: 10px;
  }
  .Exercício {
    background-color: #3e9350;
    border-radius: 10px;
  }
  .Educação {
    background-color: #f87777;
    border-radius: 10px;
  }
  .Relacionamento {
    background-color: #ec9ddf;
    border-radius: 10px;
  }
  .Saúde {
    background-color: #ec5ba1;
    border-radius: 10px;
  }
  .Meditação {
    background-color: #936c3e;
    border-radius: 10px;
  }
`;
const Card = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--white);
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: var(--font-label);
  p {
    margin-top: 0.5rem;
    margin-left: 50%;
    transform: translateX(-50%);
    font-size: 1.2rem;
  }
  span {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    button {
      background: transparent;
      border: none;
    }
  }
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const CardHabits = ({ habits }) => {
  const { title, difficulty, frequency, category } = habits;
  const { removeFromHabits } = useContext(HabitsContext);

  return (
    <Container>
      <Card className={category}>
        <Title>
          <p>{title}</p>
          <span>
            <button onClick={() => removeFromHabits(habits)}>
              <i
                onClick={() => removeFromHabits(habits)}
                class="fas fa-minus-circle"
              />
            </button>
          </span>
        </Title>
        <Info>
          <span>{difficulty}</span>
          <span>{frequency}</span>
        </Info>
      </Card>
    </Container>
  );
};
