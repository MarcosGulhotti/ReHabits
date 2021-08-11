import { Menu } from "../../components/Menu";
import styled from "styled-components";
import { HabitsContext } from "../../providers/Habits";
import { useContext, useState } from "react";
import { CardHabits } from "../../components/CardHabits";
import { Input } from "../../components/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputCategory } from "../../components/InputCategory";
import { InputDifficulty } from "../../components/InputDifficulty";
import { InputFrequency } from "../../components/InputFrequency";

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 800px;
  background-color: var(--white);
  border-radius: 10px;
  margin-top: 1rem;

  h1 {
    font-family: var(--font-title);
    margin-top: 1rem;
  }
`;

const Container = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;
const HabitsCard = styled.div`
  margin-top: 3rem;
  padding: 1rem;
  width: 100%;
  max-height: 550px;
`;

const ButtonPosition = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    height: 55px;
    width: 60%;
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

export const Habits = () => {
  const { habits, addToHabits } = useContext(HabitsContext);
  const [modal, setModal] = useState(true);

  const formSchema = yup.object().shape({
    title: yup.string().required("Titulo obrigatório"),
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
    const newData = { ...data, how_much_achieved: 0, user: 1656 };
    addToHabits(newData, setModal, modal);
  };

  return (
    <>
      <Menu />
      <Container>
        {modal ? (
          <>
            <Content>
              <h1>Seus Hábitos</h1>
              <HabitsCard>
                {habits.map((elm, i) => (
                  <CardHabits key={i} habits={elm} />
                ))}
              </HabitsCard>
              <ButtonPosition>
                <button onClick={() => setModal(!modal)}>
                  Adicionar Hábito
                </button>
              </ButtonPosition>
            </Content>
          </>
        ) : (
          <Content style={{ backgroundColor: `var(--gray)` }}>
            <form onSubmit={handleSubmit(formSubmit)}>
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
              <button style={{ width: `250px`, height: `25px` }} type="submit">
                Adicionar
              </button>
            </form>
          </Content>
        )}
      </Container>
    </>
  );
};
