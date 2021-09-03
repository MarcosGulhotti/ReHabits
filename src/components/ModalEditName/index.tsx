import styled from "styled-components";
import { Input } from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useProfile } from "../../providers/Profile";
import { IModalEditNameProps } from '../../types'

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  max-width: 1366px;
  height: 88vh;
  background-color: var(--white);
  border-radius: 10px;
  padding: 0.75rem;

  @media (max-width: 900px) {
    width: 100%;
    border-radius: 0;
    height: calc(100vh - 55px);
  }

  h1 {
    font-family: var(--font-title);
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 1rem;

    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }
`;

const StyledButtonPosition = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    height: 65px;
    width: 250px;
    border-radius: 7px;
    border: 2px solid black;
    background-color: var(--gold);
    font-size: 1.5rem;
    font-weight: bold;
    margin: 15px 0px 10px 0px;
    cursor: pointer;
    transition: filter 0.2s;
    font-family: var(--font-button);

    @media (max-width: 600px) {
      width: 80%;
      height: 45px;
      font-size: 1rem;
    }
  }

  button:hover {
    filter: brightness(110%);
  }
`;

const StyledModal = styled.div`
  background-color: var(--background);
  border-radius: 15px;
  padding: 2rem 7rem 2rem 7rem;

  @media (max-width: 600px) {
    width: 100%;
    padding: 1rem 1rem 1rem 1rem;
  }

  > * > * > div {
    margin-bottom: 20px;
  }

  input {
    width: 350px;
  }

  button {
    bottom: 0;
  }

  #return {
    background-color: var(--background);
    padding: 0rem 0rem 1rem 0rem;
    border: none;
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const ModalEditName = ({ setModal }: IModalEditNameProps) => {
  const { editUsername } = useProfile();

  const formSchema = yup.object().shape({
    username: yup.string().required("Categoria obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const formSubmit = (data: {username: string}) => {
    editUsername(data);
    setModal(false);
  };

  return (
    <StyledContent>
      <h1>Mudar usuário</h1>
      <StyledModal>
        <form onSubmit={handleSubmit(formSubmit)}>
          <i
            onClick={() => setModal(false)}
            className="fas fa-chevron-left"
            id="return"
          />
          <div>
            <div>
              <Input
                error={errors.username?.message}
                name="username"
                register={register}
                placeholder="Usuário"
                label="Mudar usuário -"
              />
            </div>
          </div>
          <StyledButtonPosition>
            <button type="submit">Mudar</button>
          </StyledButtonPosition>
        </form>
      </StyledModal>
    </StyledContent>
  );
};
