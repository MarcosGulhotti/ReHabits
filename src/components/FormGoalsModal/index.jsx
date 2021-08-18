import styled from "styled-components";
import { Input } from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { InputDifficulty } from "../InputDifficulty";

const Container = styled.div`
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
  }
`;

export const FormGoalsModal = ({
  groupId,
  setgoalModal,
  setGroupGoals,
  groupGoals,
}) => {
  const token = localStorage.getItem("token");

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
    how_much_achieved: yup
      .string()
      .matches(`^[1-9][0-9]?$|^100$`, "Apenas numeros de 0-100")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const formSubmit = (data) => {
    const { title, difficulty, how_much_achieved } = data;
    const newData = { title, difficulty, how_much_achieved, group: groupId };
    const newToken = JSON.parse(token);

    api
      .post("/goals/", newData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${newToken}`,
        },
      })
      .then((resp) => {
        setGroupGoals([...groupGoals, resp.data]);
        setgoalModal(false);
      })
      .catch((e) => console.log(e));
  };

  return (
    <Container>
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
    </Container>
  );
};
