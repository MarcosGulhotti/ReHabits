import styled from "styled-components";

const StyledCardGroup = styled.li`
  @media (min-width: 280px) {
    opacity: 0.8;
    width: 90%;
    background-color: var(--background);
    height: 200px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10px;
    color: var(--white);
    margin-top: 30px;
    border-radius: 15px;
    border: 4px solid #ecdeb0;

    #cardsTitle {
      text-align: center;
      font-family: var(--font-label);
      font-size: 18px;
      width: 100%;
      font-weight: 600;
      padding: 0;
    }

    h3 {
      font-weight: 400;
    }

    button {
      cursor: pointer;
      width: 100px;
      height: 30px;
    }
  }
  @media (min-width: 768px) {
    width: 45%;
  }
  @media (min-width: 1024px) {
    border: none;
  }
`;

export const StyledCardGoals = styled.li`
  border: 2px solid #000000;
  background: #ecdeb0;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100px;

  h1 {
    text-align: center;
    width: 100%;
    padding: 10px;
  }

  p {
    text-align: center;
    width: 50%;
  }
`;

export const CardGroup = ({ title, category, handleFunction }) => {
  return (
    <StyledCardGroup>
      <h2 id="cardsTitle">{title}</h2>
      <h3>{category}</h3>
      <button onClick={handleFunction}>Entrar</button>
    </StyledCardGroup>
  );
};
