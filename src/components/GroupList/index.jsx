import styled from 'styled-components'
import work from '../../Assets/img/Work Group.svg'
import education from '../../Assets/img/Education Group.svg'
import family from '../../Assets/img/Family Group.svg'
import relationship from '../../Assets/img/Relationship Group.svg'
import friends from '../../Assets/img/Friends Group.svg'
import healthy from '../../Assets/img/Healthy Group.svg'
import sports from '../../Assets/img/Sports Group.svg'
import meditation from '../../Assets/img/Meditation Group.svg'
import { useHistory } from 'react-router'
import { StyledBackgroundGroups } from '../BackgroundGroups'

const StyledGroupList = styled.ul`
  width: 80%;
  margin: 0 auto;
  height: 70%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
  }
`

const StyledGroups = styled.li`
  display: flex;
  width: 40%;
  background-color: ${props => props.background};
  border-radius: 10px;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    filter: brightness(0.9);
  }

  h2 {
    font-family: var(--font-title);
    color: #fff;
    font-weight: 400;
    padding-left: 30px;
  }
  
  img {
    height: 100%;
  }
`

export const GroupList = () => {
  const history = useHistory()

  return(
    <StyledBackgroundGroups>
      <div className='containerGroups'>
        <h1>Grupos</h1>
        <StyledGroupList>
          <StyledGroups background='#9DA0EC' onClick={() => history.push('/groups/work')}>
            <h2>Trabalho</h2>
            <img src={work} alt='work' />
          </StyledGroups>
          <StyledGroups background='#F87777' onClick={() => history.push('/groups/education')}>
            <h2>Educação</h2>
            <img src={education} alt="education" />
          </StyledGroups>
          <StyledGroups background='#ECAB9D' onClick={() => history.push('/groups/family')}>
            <h2>Família</h2>
            <img src={family} alt="family" />
          </StyledGroups>
          <StyledGroups background='#EC9DDF' onClick={() => history.push('/groups/relationship')}>
            <h2>Relacionamento</h2>
            <img src={relationship} alt="relationship" />
          </StyledGroups>
          <StyledGroups background='#BE5BEC' onClick={() => history.push('/groups/friends')}>
            <h2>Amigos</h2>
            <img src={friends} alt="friends" />
          </StyledGroups>
          <StyledGroups background='#EC5BA1' onClick={() => history.push('/groups/healthy')}>
            <h2>Saúde</h2>
            <img src={healthy} alt="healthy" />
          </StyledGroups>
          <StyledGroups background='#3E9350' onClick={() => history.push('/groups/sports')}>
            <h2>Exercício</h2>
            <img src={sports} alt="sports" />
          </StyledGroups>
          <StyledGroups background='#936C3E' onClick={() => history.push('/groups/meditation')}>
            <h2>Meditação</h2>
            <img src={meditation} alt="meditation" />
          </StyledGroups>
        </StyledGroupList>
      </div>
    </StyledBackgroundGroups>
  )
}