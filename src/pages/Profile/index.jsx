import styled from 'styled-components'
import { Menu } from '../../components/Menu'
import { UserInfo } from '../../components/UserInfo'
import { useEffect } from 'react'
import { useProfile } from '../../providers/Profile'
import { ModalEditName } from '../../components/ModalEditName'
import { ProfileHabits } from '../../components/ProfileHabits'

const Background = styled.div`
background-color: var(--background);
min-height: calc(100vh - 55px);
display: flex;
align-items: flex-start;
justify-content: center;
`

const Container = styled.div`
width: 80%;
display: flex;
justify-content: center;
flex-wrap: wrap;
overflow: auto;
background-color: var(--white);
margin: 1rem;

@media (max-width: 768px) {
margin: 0;
width: 100%;
}
`

export const Profile = () => {
    const { getUser, modal, setModal } = useProfile()

    useEffect(() => {
        getUser()
    }, [])

    return (
        <>
        <Menu />
        <Background>
            <Container>
                {!modal ? (
                <UserInfo />
                ) : (
                <ModalEditName setModal={setModal} />
                )}
                <ProfileHabits />
            </Container>
        </Background>
        </>
    )
}