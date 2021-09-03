import styled from "styled-components";
import { IBackgroundGroupsProps } from "../../types";
import { CardGroup } from "../CardGroup";

export const StyledBackgroundGroups = styled.div<{backgroundColor: string}>`
  background-color: var(--background);
  height: calc(100% - 55px);
  padding: 30px;

  @media (max-width: 768px) {
    position: fixed;
    z-index: -1;
    width: 100vw;
    overflow-y: scroll;
    padding: 0;
  }

  #editGroup {
    border-radius: 100%;
    width: 70px;
    height: 70px;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }

  .goalsActivitiesContainerList {
    padding: 1rem;
    background-color: var(--white);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 550px;
    height: 700px;
    justify-content: space-between;
    margin-top: 1rem;

    .createGoalsButton {
      align-self: center;
    }

    h2 {
      margin-top: 20px;
      font-family: var(--font-title);
      text-align: center;
      font-size: 48px;
    }
  }

  #headerPositionSpecify {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  button {
    @media (min-width: 280px) {
      font-size: 24px;
      font-family: var(--font-title);
      height: 50px;
      width: 220px;
      background: #ecdeb0;
      cursor: pointer;
      border-radius: 10px;
      border: 2px solid #000000;
    }
    @media (min-width: 360px) {
      width: 250px;
    }
  }

  .back {
    @media (min-width: 280px) {
      position: static;
      display: block;
      margin: 20px 0 0 calc(50vw - 114px);
    }
    @media (min-width: 360px) {
      margin: 20px 0 0 calc(50vw - 131px);
    }

    @media (min-width: 768px) {
      position: absolute;
      bottom: 20px;
      right: 20px;
    }
  }

  .containerGroups {
    background-color: var(--white);
    height: 100%;
    position: relative;

    @media (max-width: 768px) {
      background-color: var(--background);
    }

    #headerPosition {
      @media (min-width: 280px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;

        button {
          height: 40px;
          font-size: 23px;
          margin-top: 20px;
        }

        h1 {
          margin-bottom: 10px;
        }
      }
      @media (min-width: 768px) {
        width: 100%;
        flex-direction: row;
        position: relative;
        margin: 0;
        padding: 10px;
        justify-content: space-around;

        h1 {
          margin: 0;
        }

        button {
          height: 60px;
          font-size: 23px;
          margin-top: 7px;
        }
      }
    }

    .backgroundWork {
      height: 75%;
      width: 80%;
      background-color: ${(props) => props.backgroundColor};
      margin: 0 auto;
      position: relative;

      .button {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 55px;
        width: 40%;
        border-radius: 7px;
        border: 2px solid black;
        background-color: var(--gold);
        font-size: 1.5rem;
        font-weight: bold;
        margin: 15px 0px 10px 0px;
        cursor: pointer;
        transition: filter 0.2s;
        font-family: var(--font-button);

        &:hover {
          filter: brightness(110%);
        }
      }

      img {
        display: flex;
        height: 100%;
        margin: 0 auto;
      }

      .containerGoalsActivies {
        display: flex;

        .workGoals,
        .workActivies {
          width: 50%;
          position: absolute;
          top: 0;
          padding: 10px;

          h2 {
            font-family: var(--font-title);
            text-align: center;
            padding-top: 15px;
          }
        }

        .workActivies {
          right: 0;
          overflow: auto;
        }
      }
    }

    h1 {
      font-family: var(--font-title);
      font-weight: 400;
      text-shadow: 0 4px 4px gray;
      text-align: center;
      font-size: 64px;
    }
  }
`;

export const BackgroundGroups = ({
  groupName,
  image,
  goals,
  backgroundColor,
  activities,
}: IBackgroundGroupsProps) => {

  return (
    <StyledBackgroundGroups backgroundColor={backgroundColor}>
      <div className="containerGroups">
        <h1>{groupName}</h1>
        <div className="backgroundWork">
          <img src={image} alt="Group work" />
          <div className="containerGoalsActivies">
            <ul className="workGoals">
              <h2>Objetivos</h2>
              {goals?.map((el, idx) => (
                <CardGroup
                  key={idx}
                  title={el.title}
                />
              ))}
            </ul>
            <ul className="workActivies">
              <h2>Atividades</h2>
              {activities?.map((el, idx) => (
                <CardGroup key={idx} title={el.title} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </StyledBackgroundGroups>
  );
};
