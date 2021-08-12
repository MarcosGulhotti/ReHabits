import styled from 'styled-components'
import { Input } from '../Input'
import { InputCategory } from '../InputCategory'
import { InputDifficulty } from '../InputDifficulty'
import { InputFrequency } from '../InputFrequency'
import { HabitsContext } from "../../providers/Habits";
import { useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUserId } from '../../providers/UserId'

const Content = styled.div`
  display: flex;
  justify-content: ${(props) => props.align};
  align-items: center;
  flex-direction: column;

  width: 95%;
  max-width: 1366px;
  height: 88vh;
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
  }
`;

const ButtonPosition = styled.div`
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

const Modal = styled.div`
background-color: var(--background);
border-radius: 15px;
padding: 2rem 7rem 2rem 7rem;

> * {

  > * {
    margin-bottom: 20px;
  }
}

input {
  width: 350px;
}

button {
  bottom: 0;
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
        <Content align={"center"}>
            <Modal>
              <form onSubmit={handleSubmit(formSubmit)}>
                <button onClick={() => setModal('closed')}>Close</button>
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
                    <InputCategory
                      error={errors.category?.message}
                      name="category"
                      register={register}
                      placeholder="Coloque uma categoria"
                      label="Categoria"
                    />
                  </div>
                  <div>
                    <InputDifficulty
                      error={errors.difficulty?.message}
                      name="difficulty"
                      register={register}
                      placeholder="Coloque uma Dificuldade"
                      label="Dificuldade"
                    />
                  </div>
                  <div>
                    <InputFrequency
                      error={errors.frequency?.message}
                      name="frequency"
                      register={register}
                      placeholder="Coloque uma Frequencia"
                      label="Frequencia"
                    />
                  </div>
                </div>
                <ButtonPosition>
                  <button style={{ width: `250px` }} type="submit">
                    Adicionar
                  </button>
                </ButtonPosition>
              </form>
            </Modal>
          </Content>
    )
}