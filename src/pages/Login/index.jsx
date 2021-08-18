import styled from "styled-components";
import loginImage from "../../Assets/img/LoginPage.svg";
import { Menu } from "../../components/Menu";
import { FormLogin } from "../../components/FormLogin";

const Container = styled.div`
  height: calc(100vh - 55px);
  display: flex;
  align-items: stretch;
`;

const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background: url(${loginImage});
    background-repeat: no-repeat;
    background-position: center;
    background-color: var(--white);
    background-size: 75%;
  }
`;

const Content = styled.div`
  width: 40%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
  overflow-x: hidden;

  @media (max-width: 768px) {
    width: 100%;
  }

  h1 {
    font-size: 2.75rem;
    font-weight: 400;
    color: white;
    letter-spacing: 3px;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 15px;
    font-family: var(--font-title);
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--gray);
  padding: 30px 30px 15px 30px;
  border-radius: 10px;
  width: 60%;

  @media (max-width: 600px) {
    width: 85%;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .inputDiv {
    width: 100%;
    margin-bottom: 20px;

    h2 {
      font-size: 1rem;
      font-weight: bold;
      margin-left: 5px;
    }
  }

  button {
    height: 55px;
    width: 60%;
    border-radius: 7px;
    border: 2px solid black;
    background-color: var(--gold);
    font-size: 1.5rem;
    font-weight: bold;
    margin: 15px 0px 10px 0px;
    cursor: pointer;
    transition: filter 0.2s;
    font-family: var(--font-button);

    @media (max-width: 600px) {
      width: 80%;
    }
  }

  button:hover {
    filter: brightness(110%);
  }

  p {
    margin-top: 10px;
    font-size: 0.9rem;
    font-family: var(--font-label);

    a {
      color: var(--orange);
      transition: filter 0.2s;
    }

    a:hover {
      filter: brightness(125%);
    }
  }
`;

export const Login = () => {
  return (
    <>
      <Menu />
      <Container>
        <Content>
          <h1>Login</h1>
          <FormContainer>
            <FormLogin />
          </FormContainer>
        </Content>
        <Background />
      </Container>
    </>
  );
};
