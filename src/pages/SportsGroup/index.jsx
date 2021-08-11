import { Menu } from '../../components/Menu'
import sports from "../../Assets/img/Sports Group.svg"
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Toaster } from 'react-hot-toast'
import { BackgroundGroups } from '../../components/BackgroundGroups'

export const SportsGroup = () => {
  const [goals, setGoals] = useState([])
  const [activities, setActivies] = useState([])
  
  useEffect(() => {
    api.get('/goals/?group=1252')
      .then(resp => setGoals(resp.data.results))
    
    api.get('/activities/?group=1252')
      .then(resp => setActivies(resp.data.results))
  }, [])
  
  return(
    <>
      <Toaster />
      <Menu />
      <BackgroundGroups 
        groupName='Exercicios' 
        image={sports} 
        goals={goals} 
        backgroundColor='#3E9350'
        activities={activities}
      />
    </>
  )
}