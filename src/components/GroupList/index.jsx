import styled from 'styled-components'
import { StyledBackgroundGroups } from '../BackgroundGroups'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { CardGroup } from '../CardGroup'
import toast from 'react-hot-toast'

const StyledGroupList = styled.ul`
  width: 80%;
  margin: 0 auto;
  height: 70%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: auto;

  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
  }
`

export const GroupList = () => {
  const [groups, setGroups] = useState([])
  const token = JSON.parse(localStorage.getItem('token'))
  const [showMyGroups, setShowMyGroups] = useState(false)
  const [myGroups, setMyGroups] = useState([])

  useEffect(() => {
    api.get('/groups/')
    .then(resp => setGroups(resp.data.results))
  }, [])
  
  const handleSubscribe = async (id) => {
    await api.post(`/groups/${id}/subscribe/`, {},
      { 
        headers: 
        {
          Authorization: `Bearer ${token}`
        }
      })
    toast.sucess('Parabens, você acabou de entrar em um grupo.')
  }

  const getMyGroups = async () => {
    const response = await
    api.get('/groups/subscriptions/',
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      setMyGroups(response.data)
      setShowMyGroups(!showMyGroups)
  }

  return(
    <StyledBackgroundGroups>
      <div className='containerGroups'>
        <h1>Grupos</h1>
        <button className='myGroups' onClick={getMyGroups}>{showMyGroups ? 'Todos os grupos' : 'Seus grupos'}</button>
        {!showMyGroups ?
        <StyledGroupList>
          {groups?.map(el => 
            <CardGroup 
              key={el.id}
              title={el.name} 
              category={el.category}
              handleFunction={() => handleSubscribe(el.id)}
            />
          )}
        </StyledGroupList>
         :
        <StyledGroupList>
          {myGroups?.map(el =>
            <CardGroup 
              key={el.id}
              title={el.name}
              category={el.category}
            />
          )} 
        </StyledGroupList>
        }
      </div>
    </StyledBackgroundGroups>
  )
}