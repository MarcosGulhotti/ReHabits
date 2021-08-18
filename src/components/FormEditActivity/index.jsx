import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input";
import api from "../../services/api";
import styled from "styled-components";

const StyledContainer = styled.li`
  width: 500px;
  min-height: 100px;

  margin-bottom: 1rem;

  background-color: var(--gold);

  border: 2px solid black;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 98%;
    overflow-x: hidden;
  }

  #return {
    padding: 0.5rem 0rem 0rem 1rem;
    border: none;
    font-size: 2rem;
    cursor: pointer;
  }
`;

const StyledButtonPosition = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    height: 30px;
    width: 40%;
    border-radius: 7px;
    border: 2px solid black;
    background-color: var(--gray);
    font-size: 1rem;
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

export const FormEditActivity = ({
  modal,
  setModal,
  idActivity,
  setIdActivity,
  groupActivities,
}) => {
  const token = JSON.parse(localStorage.getItem("token"));

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

  const handleEditActivity = (data) => {
    const newData = { title: data.category };

    api
      .patch(`activities/${idActivity}/`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        alert("Titulo Alterado");
        groupActivities.map((elm) =>
          elm.id === idActivity ? (elm.title = newData.title) : null
        );

        setIdActivity("");
        setModal(!modal);
      })
      .catch((e) => console.log(e));
  };

  return (
    <StyledContainer style={{ height: "230px" }}>
      <form onSubmit={handleSubmit(handleEditActivity)}>
        <i
          onClick={() => setModal(!modal)}
          class="fas fa-chevron-left"
          id="return"
        />
        <div>
          <div style={{ padding: "1rem" }}>
            <Input
              error={errors.category?.message}
              name="category"
              register={register}
              placeholder="Coloque um titulo"
              label="Titulo"
            />
          </div>
        </div>
        <StyledButtonPosition>
          <button type="submit">Editar</button>
        </StyledButtonPosition>
      </form>
    </StyledContainer>
  );
};
