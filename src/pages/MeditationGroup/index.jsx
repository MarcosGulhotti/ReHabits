import { Menu } from '../../components/Menu'
import meditation from "../../Assets/img/Meditation Group.svg"
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Toaster } from 'react-hot-toast'
import { BackgroundGroups } from '../../components/BackgroundGroups'

export const MeditationGroup = () => {
  const [goals, setGoals] = useState([])
  const [activities, setActivies] = useState([])
  
  useEffect(() => {
    api.get('/goals/?group=1253')
      .then(resp => setGoals(resp.data.results))
    
    api.get('/activities/?group=1253')
      .then(resp => setActivies(resp.data.results))
  }, [])
  
  return(
    <>
      <Toaster />
      <Menu />
      <BackgroundGroups 
        groupName='Meditação' 
        image={meditation} 
        goals={goals} 
        backgroundColor='#936C3E'
        activities={activities}
      />
    </>
  )
}