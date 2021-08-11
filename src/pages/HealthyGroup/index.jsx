import { Menu } from '../../components/Menu'
import healthy from "../../Assets/img/Healthy Group.svg"
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Toaster } from 'react-hot-toast'
import { BackgroundGroups } from '../../components/BackgroundGroups'

export const HealthyGroup = () => {
  const [goals, setGoals] = useState([])
  const [activities, setActivies] = useState([])
  
  useEffect(() => {
    api.get('/goals/?group=1251')
      .then(resp => setGoals(resp.data.results))
    
    api.get('/activities/?group=1251')
      .then(resp => setActivies(resp.data.results))
  }, [])
  
  return(
    <>
      <Toaster />
      <Menu />
      <BackgroundGroups 
        groupName='Saude' 
        image={healthy} 
        goals={goals} 
        backgroundColor='#EC5BA1'
        activities={activities}
      />
    </>
  )
}