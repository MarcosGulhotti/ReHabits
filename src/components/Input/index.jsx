import styled from "styled-components";
import { css } from "styled-components";

const Container = styled.div`
  text-align: left;
  div {
    font-size: 17px;
    font-weight: bold;
    span {
      color: var(--red);
    }
  }
`;

const ContainerInput = styled.div`
  background: var(--white);
  border-radius: 10px;
  border: 2px solid var(--gray);
  color: var(--gray);
  padding: 1rem;
  width: 100%;
  display: flex;
  transition: 0.5s;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}

  &:hover {
    border-color: var(--gray);
  }

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--gray);
    font-size: 20px;

    &::placeholder {
      color: var(--placeholder);
      font-size: 15px;
      font-weight: bold;
    }
  }
`;

export const Input = ({ label, register, name, error, ...rest }) => {
  return (
    <Container>
      <div>
        {label} {!!error && <span> - {error}</span>}{" "}
      </div>
      <ContainerInput isErrored={!!error}>
        <input {...register(name)} {...rest} />
      </ContainerInput>
    </Container>
  );
};
