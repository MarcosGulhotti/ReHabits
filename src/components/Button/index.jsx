import styled from "styled-components";

const StyledButtonStyle = styled.button`
  @media (max-width: 600px) {
    width: 80%;
  }
  height: ${({ height }) => (height === undefined ? "55px" : `${height}`)};
  width: ${({ width }) => (width === undefined ? "60%" : `${width}`)};
  border-radius: 7px;
  border: 2px solid black;
  background-color: var(--gold);
  font-size: 1.5rem;
  font-weight: bold;
  margin: 15px 10px 10px 10px;
  cursor: pointer;
  transition: filter 0.2s;
  font-family: var(--font-button);
  background-color: ${(props) => (props.loginButton ? "#ECDEB0" : "#5F6874")};
  border: ${(props) =>
    props.loginButton ? "2px solid #000000" : "2px solid #F5F3EB"};
  color: ${(props) => (props.loginButton ? "#000000" : "#F5F3EB")};
  &:hover {
    filter: brightness(110%);
  }
`;

export const Button = ({ nome, loginButton, width, height, func }) => {
  return (
    <StyledButtonStyle
      onClick={() => func()}
      height={height}
      width={width}
      loginButton={loginButton}
    >
      {nome}
    </StyledButtonStyle>
  );
};
