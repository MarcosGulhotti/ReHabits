import styled from 'styled-components'

const StyledCardGroup = styled.li`
  opacity: 0.8;
  width: 100%;
  background-color: var(--background);
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px;
  color: var(--white);
  margin-top: 30px;
  border-radius: 15px;

  #cardsTitle {
    font-family: var(--font-label);
    font-size: 18px;
    width: 100%;
    font-weight: 600;
    text-align: center;
    padding: 0;
  }

  h3 {
    align-self: center;
    font-weight: 400;
  }
`

export const CardGroup = ({ title, difficulty, achieved }) => {
  return(
    <StyledCardGroup>
      <h2 id="cardsTitle">{title}</h2>
      <h3>{difficulty}</h3>
      <h3>{achieved}</h3>
    </StyledCardGroup>
  )
}