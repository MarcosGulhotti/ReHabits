import { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { HabitsContext } from '../../providers/Habits'
import { CardHabits } from '../CardHabits'

const StyledContainer = styled.div`
    width: 94%;
    margin-bottom: 2rem;
`

const StyledHabits = styled.div`
    margin: 1rem 0rem 2rem 0rem;

h2 {
    font-family: var(--font-title);
    font-size: 2.8rem;
    font-weight: 400;
    background-color: #5F6874;
    text-align: center;
    color: white;
    margin-bottom: 2px;
    padding: 0.25rem;

    @media (max-width: 820px) {
        font-size: 2rem;
    }
}

.background {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(95, 104, 116, 0.9);
    padding: 1rem;
    border-radius: 3px;

    .card {
        width: 100%;
    }

    .all {
        height: 50px;
        width: 30%;
        border-radius: 7px;
        border: 2px solid black;
        background-color: var(--gold);
        font-size: 1.25rem;
        font-weight: 400;
        padding: 0rem 1rem 0rem 1rem;
        cursor: pointer;
        transition: filter 0.2s;
        font-family: var(--font-button);
        margin-top: 1.5rem;

        @media (max-width: 600px) {
            width: 50%;
        }
    }

    .all:hover {
        filter: brightness(115%);
    }
}
`

const StyledCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

.edit {
    display: none;
}

.removeButton {
    display: none;
}

> div {
    width: 48%;

    .limit {
        p {
            @media (min-width: 1100px) {
                font-size: 2.2rem;
            }
        }
    }

    @media (max-width: 650px) {
        width: 100%;

        p {
            font-size: 0.5rem;
        }

        .label {
            font-size: 0.5rem;
        }
    }

    > div {
        height: 150px;

        span {
            font-size: 1.15rem;
        }

        @media (max-width: 650px) {
            min-height: 90px;
            height: auto;

            span {
                font-size: 0.8rem;
                font-weight: bold;
            }
        }
    }
}
`

export const ProfileHabits = () => {
    const { habits, getHabits } = useContext(HabitsContext)
    const history = useHistory()
    
    useEffect(() => {
        getHabits()
        // eslint-disable-next-line
    }, [])

    return (
        <StyledContainer>
            <StyledHabits>
                <h2>Seus hábitos</h2>
                <div className="background">
                    <div className="card">
                        <StyledCardContainer>
                            {habits.filter((_, i) => i < 4).map((elm, i) => (
                                <CardHabits key={i} eachHabits={elm} />
                            ))}
                        </StyledCardContainer>
                    </div>
                    <button onClick={() => history.push("/habits")} className="all">Ver todos</button>
                </div>
            </StyledHabits>
        </StyledContainer>
    )
}