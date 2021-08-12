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
import { InputAchieved } from '../InputAchieved'

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

> * > * > div {
    margin-bottom: 50px;
}

input {
  width: 350px;
}

button {
  bottom: 0;
}
`

export const ModalEditHabit = ({ modal, setModal }) => {
    const { editHabits } = useContext(HabitsContext);

    const formSchema = yup.object().shape({
        how_much_achieved: yup.string().required("Categoria obrigatório"),
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
        <Content align={"center"}>
            <Modal>
              <form onSubmit={handleSubmit(formSubmit)}>
                <button onClick={() => setModal('closed')}>Close</button>
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