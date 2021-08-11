import { Menu } from '../../components/Menu'
import friends from "../../Assets/img/Friends Group.svg"
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Toaster } from 'react-hot-toast'
import { BackgroundGroups } from '../../components/BackgroundGroups'

export const FriendsGroup = () => {
  const [goals, setGoals] = useState([])
  const [activities, setActivies] = useState([])
  
  useEffect(() => {
    api.get('/goals/?group=1250')
      .then(resp => setGoals(resp.data.results))
    
    api.get('/activities/?group=1250')
      .then(resp => setActivies(resp.data.results))
  }, [])
  
  return(
    <>
      <Toaster />
      <Menu />
      <BackgroundGroups 
        groupName='Amigos' 
        image={friends} 
        goals={goals} 
        backgroundColor='#BE5BEC'
        activities={activities}
      />
    </>
  )
}