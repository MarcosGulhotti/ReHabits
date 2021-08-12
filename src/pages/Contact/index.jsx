import { Menu } from "../../components/Menu";
import { ContactCard } from "../../components/ContactCard";
import styled from "styled-components";

const Dados = {
  Marcos: {
    name: "Marcos Vinicius Gulhotti",
    img: "https://ca.slack-edge.com/TQZR39SET-U01PPAZEEPQ-5eed9ffeb4a2-512",
    role: "Product Owner",
    cellphone: "(45) 9 9912-7745",
    linkedin: null,
    gitlab: null,
    github: null,
  },
  Arthur: {
    name: "Arthur Felini Linemburg",
    img: "https://ca.slack-edge.com/TQZR39SET-U01SJTKSRRR-086832d3d4a5-512",
    role: "Teach Leader",
    cellphone: "(48) 9 9601-0693",
    linkedin: null,
    gitlab: null,
    github: null,
  },
  Lucas: {
    name: "Lucas Cardoso",
    img: "https://ca.slack-edge.com/TQZR39SET-U01T8FGTHR6-1050fc9757a2-512",
    role: "Quality Assurance",
    cellphone: "",
    linkedin: null,
    gitlab: null,
    github: null,
  },
  Luiz: {
    name: "Luiz Victor B. Oliveira",
    img: "https://ca.slack-edge.com/TQZR39SET-U01SCCZS11T-26bf72c9a4b0-512",
    role: "Scrum Master",
    cellphone: "(11) 9 8079-9716",
    linkedin: 'https://www.linkedin.com/in/luiz-victor-bispo-oliveira-bb6007170/',
    gitlab: 'https://gitlab.com/LuizVictor19',
    github: 'https://github.com/luizvictor19',
  },
};
const Container = styled.div`
  @media (min-width: 769px) {
    height: 100vh;
  }
  width: 100%;
  background-color: var(--background);
`;
const ContactDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 769px) {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  }
  margin-top: 3rem;
`;

export const Contact = () => {
  return (
    <Container>
      <Menu />
      <ContactDiv>
        <ContactCard Dados={Dados.Marcos} />
        <ContactCard Dados={Dados.Arthur} />
        <ContactCard Dados={Dados.Lucas} />
        <ContactCard Dados={Dados.Luiz} />
      </ContactDiv>
    </Container>
  );
};
