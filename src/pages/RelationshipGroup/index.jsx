import { Menu } from '../../components/Menu'
import relationship from "../../Assets/img/Relationship Group.svg"
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Toaster } from 'react-hot-toast'
import { BackgroundGroups } from '../../components/BackgroundGroups'

export const RelationshipGroup = () => {
  const [goals, setGoals] = useState([])
  const [activities, setActivies] = useState([])
  
  useEffect(() => {
    api.get('/goals/?group=1249')
      .then(resp => setGoals(resp.data.results))
    
    api.get('/activities/?group=1249')
      .then(resp => setActivies(resp.data.results))
  }, [])
  
  return(
    <>
      <Toaster />
      <Menu />
      <BackgroundGroups 
        groupName='Relacionamento' 
        image={relationship} 
        goals={goals} 
        backgroundColor='#EC9DDF'
        activities={activities}
      />
    </>
  )
}