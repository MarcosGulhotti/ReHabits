import styled from "styled-components";
import Linkedin from "../../Assets/img/Linkedin.jpg";
import GitHub from "../../Assets/img/GitHub.jpg";
import GitLab from "../../Assets/img/GitLab.png";

const StyledContainer = styled.div`
  width: 300px;
  height: 750px;
  background-color: var(--gold);
  border-radius: 10px;
  box-shadow: 10px 10px 25px -8px #000000;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;

  .Profile {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    margin-left: 50%;
    transform: translateX(-50%);
  }
`;

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border: 2px solid var(--background);
`;

const StyledLinks = styled.div`
  display: flex;
  justify-content: space-evenly;

  img {
    border-radius: 100%;  
    cursor: pointer;
    width: 70px;
    height: 70px;
  }
`;

const StyledNameRole = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 5rem;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1rem;
  }
`;

const StyledCellphone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 5rem;
  i {
    margin-right: 1rem;
  }
  
  p {
    font-weight: bold;
  }
`;

export const ContactCard = ({ Dados }) => {
  const { name, img, role, cellphone, linkedin, github, gitlab } = Dados;

  return (
    <StyledContainer>
      <StyledImage className="Profile" src={img} />
      <StyledNameRole>
        <h1>{name}</h1>
        <h2>{role}</h2>
      </StyledNameRole>
      <StyledLinks>
        <a rel="noreferrer" target="_blank" href={linkedin}>
          <img alt="Linkedin" src={Linkedin} />
        </a>
        <a rel="noreferrer" target="_blank" href={github}>
          <img alt="GitHub" src={GitHub} />
        </a>
        <a rel="noreferrer" target="_blank" href={gitlab}>
          <img alt="GitLab" src={GitLab} />
        </a>
      </StyledLinks>
      <StyledCellphone>
        <i class="fas fa-phone-square-alt"></i>
        <p>{cellphone}</p>
      </StyledCellphone>
    </StyledContainer>
  );
};
