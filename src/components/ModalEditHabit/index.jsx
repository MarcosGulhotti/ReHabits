import styled from 'styled-components'
import { Input } from '../Input'
import { HabitsContext } from "../../providers/Habits";
import { useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputAchieved } from '../InputAchieved'

const StyledContainer = styled.div`
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 80%;

  @media (max-width: 800px) {
    width: 100%;
    padding: 0;
  }
`

const StyledContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 95%;
  max-width: 1366px;
  min-height: 88vh;
  background-color: var(--white);
  border-radius: 10px;
  padding: 0.75rem;

  @media (max-width: 600px) {
    width: 100%;
    border-radius: 0;
    height: 90vh;
  }

  h1 {
    font-family: var(--font-title);
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 2rem;

    @media (max-width: 800px) {
      font-size: 2rem;
      text-align: center;
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
      width: 30%;
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
  padding: 0rem 1rem 0rem 1rem;
}

> * > * > div {
  margin-bottom: 30px;
}

input {
  width: 350px;
}

#return {
  background-color: var(--background);
  padding: 1rem 0rem 2rem 0rem;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}
`

export const ModalEditHabit = ({ modal, setModal }) => {
  const { editHabits } = useContext(HabitsContext);

  const formSchema = yup.object().shape({
    how_much_achieved: yup.string().required("Categoria obrigatório").matches(/[0-9]+/gi, 'Quantidade de dias obrigatória'),
    achieved: yup.string().required("Categoria obrigatória"),
  });

  const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm({
      resolver: yupResolver(formSchema),
  });

  const formSubmit = (data) => {
      editHabits(data)
      setModal('closed')
  };

  return (
    <StyledContainer>
      <StyledContent align={"center"}>
        <h1>Editar hábito</h1>
        <StyledModal>
          <form onSubmit={handleSubmit(formSubmit)}>
            <i
              onClick={() => setModal('closed')}
              class="fas fa-chevron-left"
              id="return"
            />
            <div>
                <div>
                    <Input
                    error={errors.how_much_achieved?.message}
                    name="how_much_achieved"
                    register={register}
                    placeholder="Quantos dias"
                    label="Dias concluídos -"
                    />
                </div>
                <div>
                    <InputAchieved
                    error={errors.achieved?.message}
                    name="achieved"
                    register={register}
                    placeholder="Completou?"
                    label="Completou a meta ? -"
                    />
                </div>
            </div>
            <StyledButtonPosition>
              <button style={{ width: `250px` }} type="submit">
                Adicionar
              </button>
            </StyledButtonPosition>
          </form>
        </StyledModal>
      </StyledContent>
    </StyledContainer>
  )
}