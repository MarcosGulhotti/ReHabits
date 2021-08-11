import styled from "styled-components";

const ButtonStyle = styled.button`
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
  background-color: ${({ firstButton }) =>
    firstButton ? "#ECDEB0" : "#5F6874"};
  border: ${({ firstButton }) =>
    firstButton ? "2px solid #000000" : "2px solid #F5F3EB"};
  color: ${({ firstButton }) => (firstButton ? "#000000" : "#F5F3EB")};
  &:hover {
    filter: brightness(110%);
  }
`;

export const Button = ({ nome, firstButton, width, height, func }) => {
  return (
    <ButtonStyle
      onClick={() => func()}
      height={height}
      width={width}
      firstButton={firstButton}
    >
      {nome}
    </ButtonStyle>
  );
};
