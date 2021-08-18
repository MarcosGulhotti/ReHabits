import styled from "styled-components";
import { useProfile } from "../../providers/Profile";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 3rem 0rem 3rem;

  @media (max-width: 820px) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    margin: 0;
  }

  div {
    button {
      height: 30px;
      width: 40%;
      border-radius: 7px;
      border: 2px solid black;
      background-color: var(--gold);
      font-size: 1rem;
      font-weight: 400;
      padding: 0rem 1rem 0rem 1rem;
      cursor: pointer;
      transition: filter 0.2s;
      font-family: var(--font-button);
      margin-left: 2rem;

      @media (max-width: 820px) {
        height: 30px;
        width: 55%;
        font-size: 0.8rem;
      }
    }
  }
`;

const Infos = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 820px) {
    flex-direction: column;
  }

  picture {
    img {
      width: calc(11vw + 2.5rem);
      border-radius: calc((11vw + 2.5rem) / 2);

      @media (max-width: 820px) {
        width: calc(15vw + 2.5rem);
        border-radius: calc((15vw + 2.5rem) / 2);
      }
    }
  }

  div {
    min-width: 400px;
  }

  h2 {
    font-size: calc(1vw + 1rem);
    font-family: var(--font-label);
    font-weight: 400;
    margin: 0rem 0rem 1rem 2rem;

    @media (max-width: 800px) {
      margin-top: 1rem;
      font-size: calc(1vw + 1rem);
    }
  }
`;

export const UserInfo = () => {
  const { userInfo, setModal } = useProfile();

  return (
    <Container>
      <Infos>
        <picture>
          <img
            src="https://d1bvpoagx8hqbg.cloudfront.net/259/2347b61ae2c02d0f2b100474e2c29f71.jpg"
            alt="teste"
          />
        </picture>
        <div>
          <h2>Nome: {userInfo.username}</h2>
          <h2>E-mail: {userInfo.email}</h2>
          <button onClick={() => setModal(true)}>Mudar nome</button>
        </div>
      </Infos>
      <div></div>
    </Container>
  );
};
