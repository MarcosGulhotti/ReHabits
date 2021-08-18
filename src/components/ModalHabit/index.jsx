import styled from 'styled-components'
import { Input } from '../Input'
import { HabitsContext } from "../../providers/Habits";
import { useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUserId } from '../../providers/UserId'

const StyledContainer = styled.div`
background-color: var(--white);
display: flex;
align-items: center;
justify-content: center;
padding: 2rem;
width: 80%;

@media (max-width: 800px) {
  width: 100%;
  padding: 0;
}
`

const StyledContent = styled.div`
  display: flex;
  justify-content: ${(props) => props.align};
  align-items: center;
  flex-direction: column;
  width: 95%;
  max-width: 1366px;
  border-radius: 10px;

  @media (max-width: 600px) {
    width: 100%;
    border-radius: 0;
  }

  h1 {
    font-family: var(--font-title);
    font-size: 3.25rem;
    font-weight: 400;
    margin-bottom: 2rem;

    @media (max-width: 800px) {
      font-size: 2rem;
      text-align: center;
    }
  }
`;

export const StyledButtonPosition = styled.div`
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

export const StyledModal = styled.div`
background-color: var(--background);
border-radius: 15px;
padding: 0rem 7rem 0rem 7rem;

@media (max-width: 600px) {
  width: 100%;
  padding: 0rem 1rem 0rem 1rem;
}

> * {

  > * {
    margin-bottom: 20px;

    > * {
      margin-bottom: 15px;
    }
  }
}

input {
  width: 350px;
}

#return {
  background-color: var(--background);
  padding: 2rem 0rem 0.5rem 0rem;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}
`

export const ModalHabit = ({ modal, setModal }) => {
    const { addToHabits } = useContext(HabitsContext);
    const { id } = useUserId()

    const formSchema = yup.object().shape({
        title: yup.string().required("Titulo obrigatório").max(20, "Máximo de 20 characteres atingido"),
        category: yup.string().required("Categoria obrigatória"),
        difficulty: yup.string().required("Categoria obrigatória"),
        frequency: yup.string().required("Categoria obrigatória"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const formSubmit = (data) => {
        const newData = { ...data, how_much_achieved: 0, achieved: false, user: Number(id) };
        addToHabits(newData, setModal, modal);
    };

    return (
      <StyledContainer>
        <StyledContent align={"center"}>
          <h1>Adicionar hábito</h1>
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
                      error={errors.title?.message}
                      name="title"
                      register={register}
                      placeholder="Coloque um titulo"
                      label="Titulo"
                    />
                  </div>
                  <div>
                    <Input
                      error={errors.category?.message}
                      name="category"
                      register={register}
                      placeholder="Coloque uma categoria"
                      label="Categoria"
                    />
                  </div>
                  <div>
                    <Input
                      error={errors.difficulty?.message}
                      name="difficulty"
                      register={register}
                      placeholder="Coloque uma Dificuldade"
                      label="Dificuldade"
                    />
                  </div>
                  <div>
                    <Input
                      error={errors.frequency?.message}
                      name="frequency"
                      register={register}
                      placeholder="Coloque uma Frequencia"
                      label="Frequencia"
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