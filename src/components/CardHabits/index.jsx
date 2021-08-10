import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 550px;
  background: transparent;
  i {
    color: var(--red);
    position: absolute;
    top: 0%;
    right: 0%;
  }
`;
const Card = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  color: var(--white);

  .Trabalho {
    background-color: #9da0ec;
  }
  .Familia {
    background-color: #ecab9d;
  }
  .Amigos {
    background-color: #be5bec;
  }
  .Exercicio {
    background-color: #3e9350;
  }
  .Educação {
    background-color: #f87777;
  }
  .Relacionamento {
    background-color: #ec9ddf;
  }
  .Saúde {
    background-color: #ec5ba1;
  }
  .Meditação {
    background-color: #936c3e;
  }
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: var(--font-label);
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardHabits = ({ habits }) => {
  const { title, difficulty, frequency, category } = habits;

  return (
    <Container>
      <i class="fas fa-minus-circle"></i>
      <Card className={category}>
        <Title>
          <p>{title}</p>
        </Title>
        <Info>
          <span>{difficulty}</span>
          <span>{frequency}</span>
        </Info>
      </Card>
    </Container>
  );
};
