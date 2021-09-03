import { useContext } from "react";
import styled from "styled-components";
import { HabitsContext } from "../../providers/Habits";
import { ICardHabitsProps } from '../../types'

const StyledContainer = styled.div`
  width: 100%;
  background: transparent;
  margin-bottom: 1rem;

  i {
    color: var(--red);
  }
`;

const StyledCard = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--white);
  border: 2px solid black;
  background-color: var(--gold);
  color: black;
  border-radius: 10px;
`;

const StyledTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  font-family: var(--font-label);

  .limit {
    width: 85%;
    word-wrap: break-word;

    @media (max-width: 1100px) {
      width: 50%;
    }

    p {
      width: 100%;
      font-size: 2.5rem;
      line-height: 30px;
      margin-top: 15px;
      font-family: var(--font-label);
      text-align: center;
      word-wrap: break-word;

      @media (max-width: 1100px) {
        font-size: 1.5rem;
        line-height: 25px;
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    span {
      font-size: 1rem;
      font-weight: bold;
    }

    .label {
      font-weight: 400;
      font-size: 0.8rem;
      margin: 10px 0px -5px 10px;

      @media (max-width: 800px) {
        font-size: 0.7rem;
      }
    }
  }

  .completed {
    display: flex;
    flex-direction: row;
    align-items: center;

    i {
      margin: 10px 0px -5px 3px;
    }
  }

  span {
    display: flex;
    justify-content: flex-end;
    margin: 10px 20px -5px 10px;
    button {
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }

  .remove {
    width: 72px;

    @media (max-width: 800px) {
      width: 63px;
    }
  }
`;

const StyledInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 1rem 0.5rem 1rem;

  @media (max-width: 1000px) {
      padding: 0 0.5rem 0.25rem 0.5rem;
    }

  > div {
    width: 33%;
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    font-family: var(--font-label);
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {

      font-size: 0.8rem;
      font-family: var(--font-label);

      @media (max-width: 800px) {
        font-size: 0.7rem;
      }
    }

    @media (max-width: 1000px) {
      font-size: 1rem;
    }
  }

  .frequency {
    align-items: flex-end;
  }

  button {
    background-color: var(--background);
    color: white;
    border: 1px solid black;
    border-radius: 30px;
    width: 100px;
    height: 20px;
    font-family: var(--font-button);
    cursor: pointer;
    transition: background-color 0.2s;
    margin: auto;
  }

  button:hover {
    background-color: gray;
  }
`;

export const CardHabits = ({ eachHabits, setModal }: ICardHabitsProps) => {
  const { title, difficulty, frequency, category, how_much_achieved, achieved, id } = eachHabits;
  const { removeFromHabits, setEditHabit } = useContext(HabitsContext);

  const handleClick = (id: number) => {
    setEditHabit(id)
    setModal('edit')
  }

  return (
    <StyledContainer>
      <StyledCard className={category}>
        <StyledTitle>
          <div>
            <div className="completed">
              <span className="label">Completado:</span>
              <i
                onClick={() => removeFromHabits(eachHabits)}
                className={achieved ? "fas fa-check-circle fa-sm" : "fas fa-times-circle fa-sm"}
                style={achieved ? {color: "#00d000"} : {color: "red"}}
              />
            </div>
            <span>{how_much_achieved}</span>
          </div>
          <div className="limit">
            <p>{title}</p>
          </div>
          <span className="remove">
            <button className="removeButton" onClick={() => removeFromHabits(eachHabits)}>
              <i
                onClick={() => removeFromHabits(eachHabits)}
                className="fas fa-times fa-lg"
                style={{color: "gray"}}
              />
            </button>
          </span>
        </StyledTitle>
        <StyledInfo>
          <div>
            <p>Dificuldade:</p>
            <span>{difficulty}</span>
          </div>
          <div>
            <button className="edit" onClick={() => handleClick(id)}>Editar</button>
          </div>
          <div className="frequency">
            <p>Frequencia:</p>
            <span>{frequency}</span>
          </div>
        </StyledInfo>
      </StyledCard>
    </StyledContainer>
  );
};
