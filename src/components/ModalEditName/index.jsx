import styled from 'styled-components'
import { Input } from '../Input'
import { HabitsContext } from "../../providers/Habits";
import { useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useProfile } from '../../providers/Profile';

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  width: 100%;
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
    margin-bottom: 20px;
}

input {
  width: 350px;
}

button {
  bottom: 0;
}
`

export const ModalEditName = ({ setModal }) => {
    const { editUsername } = useProfile()

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

    const formSubmit = (data) => {
        editUsername(data)
        setModal(false)
    };

    return (
        <Content align={"center"}>
            <Modal>
              <form onSubmit={handleSubmit(formSubmit)}>
                <button onClick={() => setModal(false)}>Close</button>
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
                <ButtonPosition>
                  <button style={{ width: `250px` }} type="submit">
                    Mudar
                  </button>
                </ButtonPosition>
              </form>
            </Modal>
          </Content>
    )
}