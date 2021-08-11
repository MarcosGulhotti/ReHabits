import { Menu } from '../../components/Menu'
import education from "../../Assets/img/Education Group.svg"
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Toaster } from 'react-hot-toast'
import { BackgroundGroups } from '../../components/BackgroundGroups'

export const EducationGroup = () => {
  const [goals, setGoals] = useState([])
  const [activities, setActivies] = useState([])
  
  useEffect(() => {
    api.get('/goals/?group=1247')
      .then(resp => setGoals(resp.data.results))
    
    api.get('/activities/?group=1247')
      .then(resp => setActivies(resp.data.results))
  }, [])
  
  return(
    <>
      <Toaster />
      <Menu />
      <BackgroundGroups 
        groupName='Educação' 
        image={education} 
        goals={goals} 
        backgroundColor='#F87777'
        activities={activities}
      />
    </>
  )
}