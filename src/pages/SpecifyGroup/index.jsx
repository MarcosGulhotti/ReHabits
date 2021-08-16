import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { StyledBackgroundGroups } from '../../components/BackgroundGroups'
import { Menu } from '../../components/Menu'
import api from '../../services/api'
import { StyledGoalsActivitiesList } from '../../components/GroupList'
import { StyledCardGoals } from '../../components/CardGroup'

export const SpecifyGroup = () => {
  const { id } = useParams()
  const token = localStorage.getItem('token')
  const [dataGroup, setDataGroup] = useState([])
  const history = useHistory()
  const [groupGoals, setGroupGoals] = useState([])
  const [groupActivities, setGroupActivities] = useState([])

  const handleSubscribe = async (id) => {
    await api.post(`/groups/${id}/subscribe/`, {},
      { 
        headers: 
        {
          Authorization: `Bearer ${token}`
        }
      })
  }

  const gettingDataFromGroups = async () => {
    const resp = await api.get(`/groups/${id}/`)
    setDataGroup(resp.data)
    const respGoals = await api.get(`/goals/?group=${id}`)
    setGroupGoals(respGoals.data.results)
    const respActivities = await api.get(`/activities/?group=${id}`)
    setGroupActivities(respActivities.data.results)
  }

  useEffect(() => {
    gettingDataFromGroups()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Menu />
      <StyledBackgroundGroups>
        <div id='headerPositionSpecify'>
          <button onClick={() => history.push('/groups')}>Voltar</button>
          <h1>{dataGroup.name}</h1>
          <button onClick={() => handleSubscribe(id)}>Inscrever-se</button>
        </div>
        <div className='goalsActivitiesContainerList'>
            <h2>Objetivos</h2>
          <StyledGoalsActivitiesList>
            {groupGoals?.map(el => 
              <StyledCardGoals key={el.id}>
                <h1>{el.title}</h1>
                <p>{el.how_much_achieved}</p>
                <p>{el.difficulty}</p>
              </StyledCardGoals>
            )}
          </StyledGoalsActivitiesList>
          <button className='createGoalsButton'>Criar objetivo</button>
        </div>
      </StyledBackgroundGroups>
    </>
  )
}