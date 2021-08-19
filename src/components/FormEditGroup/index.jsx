import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../components/Input";
import { useUserId } from "../../providers/UserId";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../../services/api";
import styled from "styled-components";
import toast from "react-hot-toast";

const StyledContainer = styled.div`
  width: 500px;
  height: 350px;
  background-color: var(--gray);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 15px;
  border: 3px solid black;

  padding: 1rem;

  @media (max-width: 600px) {
    width: 90%;
  }

  i {
    cursor: pointer;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const StyledButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

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
  }
`;

export const FormEditGroup = ({ setEditGroupModal }) => {
  const { id } = useParams();
  const token = JSON.parse(localStorage.getItem("token"));
  const [dataGroup, setDataGroup] = useState([]);
  const userInfo = useUserId();

  const gettingDataFromGroups = async () => {
    const resp = await api.get(`/groups/${id}/`);
    setDataGroup(resp.data);
  };

  useEffect(() => {
    gettingDataFromGroups();
    // eslint-disable-next-line
  }, []);

  const formSchema = yup.object().shape({
    category: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleEditGroup = async (data) => {
    if (dataGroup.creator.id === parseInt(userInfo.id)) {
      try {
        await api.patch(`groups/${id}/`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setEditGroupModal(false);
        toast.success("Categoria alterada com sucesso!");
      }
      catch {
        toast.error("Algo deu errado.")
      }
    } else {
      toast.error("Você precisa ser dono de um grupo para poder edita-lo");
      }
  };

  return (
    <StyledContainer>
      <i
        onClick={() => setEditGroupModal(false)}
        class="fas fa-chevron-left"
        id="return"
      />
      <form onSubmit={handleSubmit(handleEditGroup)}>
        <div>
          <Input
            error={errors.category?.message}
            name="category"
            register={register}
            placeholder="Coloque uma categoria"
            label="Categoria"
          />
        </div>

        <StyledButtonDiv>
          <button type="submit">Editar</button>
        </StyledButtonDiv>
      </form>
    </StyledContainer>
  );
};
