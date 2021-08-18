import styled from "styled-components";
import { css } from "styled-components";

const Container = styled.div`
  text-align: left;
  div {
    font-size: 17px;
    font-weight: bold;
    font-family: var(--font-label);
    span {
      color: var(--red);
      font-family: var(--font-label);
    }
  }
`;

const ContainerInput = styled.div`
  background: var(--white);
  border-radius: 10px;
  border: 2px solid var(--gray);
  color: var(--gray);
  padding: 0.9rem;
  width: 100%;
  display: flex;
  transition: 0.5s;
  font-family: var(--font-label);

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}

  &:hover {
    border-color: var(--gray);
  }

  select {
    font-family: var(--font-label);
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--background);
    font-size: 18px;

    &::placeholder {
      font-family: var(--font-label);
      color: var(--placeholder);
      font-size: 15px;
      font-weight: bold;
    }
  }
`;

export const InputDifficulty = ({ label, register, name, error, ...rest }) => {
  return (
    <Container>
      <div style={{marginBottom: '0.8rem'}}>
        {label} {!!error && <span> - {error}</span>}{" "}
      </div>
      <ContainerInput isErrored={!!error}>
        <select {...register(name)} {...rest}>
          <option value='Muito Fácil'>Escolha uma dificuldade</option>
          <option value="Muito Fácil">Muito Fácil</option>
          <option value="Fácil">Fácil</option>
          <option value="Médio">Médio</option>
          <option value="Difícil">Difícil</option>
          <option value="Muito Difícil">Muito Difícil</option>
        </select>
      </ContainerInput>
    </Container>
  );
};
