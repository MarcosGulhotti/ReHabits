import styled from "styled-components";
import { Input } from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { InputDate } from "../../components/InputDate";

const Container = styled.div`
  width: 510px;
  height: 475px;
  background-color: var(--background);
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 8rem;
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

export const FormActivitiesModal = ({
  groupId,
  setActivitiesModal,
  setGroupActivities,
  groupActivities,
}) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    realization_time: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const formSubmit = async (data) => {
    const newData = { ...data, group: groupId };

    await api.post("activities/", newData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setGroupActivities([...groupActivities, newData]);
    setActivitiesModal(false);
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
    </Container>
  );
};
