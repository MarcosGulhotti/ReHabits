import styled from 'styled-components'

export const StyledBackgroundGroups = styled.div`
  background-color: var(--background);
  height: calc(100% - 55px);
  padding: 30px;

  @media (max-width: 768px) {
    padding: 0;
  }

  .containerGroups {
    background-color: var(--white);
    height: 100%;

    @media (max-width: 768px) {
      background-color: var(--background);
    }

    .backgroundWork {
      height: 70%;
      width: 80%;
      background-color: #9DA0EC;
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

      .workList {
        background-color: transparent;
        display: flex;
        height: 100%;
        width: 100%;
        flex-wrap: wrap;
        position: absolute;
        top: 0;
        justify-content: space-around;
      }
    }
    
    h1{
      font-family: var(--font-title);
      font-weight: 400;
      text-shadow: 0 4px 4px gray;
      text-align: center;
      font-size: 64px;
      margin-bottom: 50px;
    }
  }
`