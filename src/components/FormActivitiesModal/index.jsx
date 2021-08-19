import styled from "styled-components";
import { Input } from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { InputDate } from "../../components/InputDate";
import toast from "react-hot-toast";
import { useEffect } from "react";

const StyledContainer = styled.div`
  width: 500px;
  height: 400px;
  padding: 1rem;

  background-color: var(--gray);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 10px;

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
      font-weight: lighter;
      margin: 15px 0px 10px 0px;
      cursor: pointer;
      transition: filter 0.2s;
      font-family: var(--font-button);

      &:hover {
        filter: brightness(110%);
      }

      @media (max-width: 600px) {
        width: 95%;
        height: 45px;
        font-size: 1.2rem;
      }
    }
  }
`;

export const FormActivitiesModal = ({
  groupId,
  setAddActivity,
  setGroupActivities,
  groupActivities,
  gettingDataFromGroups,
}) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    realization_time: yup.string().required("Campo obrigatório"),
  });

  useEffect(() => {
    gettingDataFromGroups();
    // eslint-disable-next-line
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const formSubmit = async (data) => {
    const newData = { ...data, group: groupId };

    try {
      await api.post("activities/", newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Atividade criada.");
      setGroupActivities([...groupActivities, newData]);
      gettingDataFromGroups()
      setAddActivity(false);
    } catch {
      toast.error("Algo deu errado.");
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
          <InputDate
            error={errors.realization_time?.message}
            name="realization_time"
            register={register}
            placeholder="Coloque o tempo de realização aqui"
            label="Tempo de realização"
          />
        </div>
        <button type="submit">Criar atividade</button>
      </form>
    </StyledContainer>
  );
};
