import { Menu } from '../../components/Menu'
import family from "../../Assets/img/Family Group.svg"
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Toaster } from 'react-hot-toast'
import { BackgroundGroups } from '../../components/BackgroundGroups'

export const FamilyGroup = () => {
  const [goals, setGoals] = useState([])
  const [activities, setActivies] = useState([])
  
  useEffect(() => {
    api.get('/goals/?group=1248')
      .then(resp => setGoals(resp.data.results))
    
    api.get('/activities/?group=1248')
      .then(resp => setActivies(resp.data.results))
  }, [])
  
  return(
    <>
      <Toaster />
      <Menu />
      <BackgroundGroups 
        groupName='Familia' 
        image={family} 
        goals={goals} 
        backgroundColor='#ECAB9D'
        activities={activities}
      />
    </>
  )
}