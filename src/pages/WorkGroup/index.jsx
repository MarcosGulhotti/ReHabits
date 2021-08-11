import { Menu } from '../../components/Menu'
import { StyledBackgroundGroups } from '../../components/BackgroundGroups'
import work from "../../Assets/img/Work Group.svg"
import { CardGroup } from '../../components/CardGroup'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import toast, { Toaster } from 'react-hot-toast'

export const WorkGroup = () => {
  const [groups, setGroups] = useState([])
  const [goals, setGoals] = useState([])
  const token = localStorage.getItem('token')
  // const [inAGroup, setInAGroup] = useState(false)

  useEffect(() => {
    api.get('/groups/')
      .then(resp => setGroups(resp.data.results.filter(el => el.category.toLowerCase() === 'trabalho')))
      .then(() => setGoals(groups[0]?.goals))
      // eslint-disable-next-line
  }, [])
  
  const enterGroup = () => {
    const id = groups[0].id
    api.post(`/groups/${id}/subscribe/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => {
        console.log('deu')
        toast.success('Bem-vindo à bordo')
      })
  }

  return(
    <>
      <Toaster />
      <Menu />
      <StyledBackgroundGroups>
        <div className="containerGroups">
          <h1>Trabalho</h1>
          <div className='backgroundWork'>
            <img src={work} alt="Group work" />
            <ul className='workList'>
              {goals?.map((el, idx) =>
                <CardGroup
                  key={idx}
                  title={el.title} 
                  difficulty={el.difficulty}
                  achieved={JSON.stringify(el.achieved)}
                />
              )}
            </ul>
            <button className='button' onClick={enterGroup}>Entrar no grupo</button>
          </div>
        </div>
      </StyledBackgroundGroups>
    </>
  )
}