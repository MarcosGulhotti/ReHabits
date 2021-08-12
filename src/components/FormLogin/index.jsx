import { Input } from '../Input';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api'
import { useContext } from 'react';
import { LoginContext } from '../../providers/Login'
import { useUserId } from '../../providers/UserId';

export const FormLogin = () => {
    const { setUserId } = useUserId()
    const history = useHistory()
    const { setIsLogged } = useContext(LoginContext)

    const formSchema = yup.object().shape({
      username: yup
        .string()
        .required("Usuário obrigatório"),
      password: yup
        .string()
        .required("Senha obrigatória")
    })
  
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm({
      resolver: yupResolver(formSchema)
    })

    const formSubmit = (data) => {
      api
        .post("/sessions/", data)
        .then((response) => {
          const { access } = response.data
          localStorage.setItem("token", JSON.stringify(access))
          setUserId(access)
          setIsLogged(true)
          history.push("/dashboard")
        })
        .catch(() => console.log("Usuário ou e-mail inválido"))
    }

    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <div className="inputDiv">
              <Input
                error={errors.username?.message}
                name='username' register={register}
                placeholder='Coloque seu usuário'
                label='Usuário' />
            </div>
            <div className="inputDiv">
              <Input
                error={errors.password?.message}
                name='password' register={register}
                placeholder='Coloque sua senha'
                label='Senha'
                type='password' />
            </div>
            <button type="submit">Login</button>
            <p>Ainda não possui uma conta? <Link to="/register">Cadastre-se</Link></p>
        </form>
    )
}
