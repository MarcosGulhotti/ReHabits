import styled from "styled-components";
import { Input } from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { InputDifficulty } from "../InputDifficulty";
import toast from "react-hot-toast";
import { IFormGoalsProps, IFormGoalsModalProps } from '../../types'

const StyledContainer = styled.div`
  width: 510px;
  height: 475px;
  background-color: var(--gray);
  border-radius: 10px;
  padding: 1rem;

  @media (max-width: 600px) {
    width: 100%;
  }

  @media (max-width: 350px) {
    select {
      font-size: 14px;
    }

    input {
      font-size: 14px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      width: 100%;
      margin-bottom: 1rem;
    }

    button {
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

      @media (max-width: 600px) {
        width: 90%;
      }
    }
  }
`;

export const FormGoalsModal = ({ groupId, setgoalModal, setGroupGoals, groupGoals }: IFormGoalsModalProps) => {
  const token = localStorage.getItem("token") || "null";

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
    how_much_achieved: yup
      .string()
      .matches(/^[1-9][0-9]?$|^100$/, "Apenas numeros de 0-100")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const formSubmit = async (data: IFormGoalsProps) => {
    const { title, difficulty, how_much_achieved } = data;
    const newData = { title, difficulty, how_much_achieved, group: groupId };
    const newToken = JSON.parse(token);

    try {
      const resp = await api.post("/goals/", newData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${newToken}`,
        },
      })
      toast.success('Objetivo criado com sucesso.')
      setGroupGoals([...groupGoals, resp.data]);
      setgoalModal(false);
    }
    catch {
      toast.error('Algo deu errado.')
    }
  };

  return (
    <StyledContainer>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="inputDiv">
          <Input
            error={errors.title?.message}
            name="title"
            register={register}
            placeholder="Coloque o titulo aqui"
            label="Titulo"
          />
        </div>
        <div className="inputDiv">
          <InputDifficulty
            error={errors.difficulty?.message}
            name="difficulty"
            register={register}
            placeholder="Coloque a dificuldade aqui"
            label="Dificuldade"
          />
        </div>
        <div className="inputDiv">
          <Input
            error={errors.how_much_achieved?.message}
            name="how_much_achieved"
            register={register}
            placeholder="Coloque quanto você fez aqui"
            label="Quanto fez"
          />
        </div>
        <button type="submit">Criar objetivo</button>
      </form>
    </StyledContainer>
  );
};
