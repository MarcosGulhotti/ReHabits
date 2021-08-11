import { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Menu } from '../../components/Menu'
import { LoginContext } from '../../providers/Login'

export const Dashboard = () => {
  const history = useHistory()
  const { isLogged, setIsLogged } = useContext(LoginContext) 

  useEffect(() => {
    if(isLogged === false) {
      history.push('/')
    } else {
      setIsLogged(true)
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Menu />
      <button onClick={() => history.push('/groups')}>Grupos</button>
    </>
  )
}