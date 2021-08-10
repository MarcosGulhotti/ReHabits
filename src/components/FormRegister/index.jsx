import { Input } from "../Input"
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import api from '../../services/api'

export const FormRegister = () => {
    const history = useHistory()

  const formSchema = yup.object().shape({
    "username": yup
      .string()
      .required("Usuário obrigatório"),
    "email": yup
      .string()
      .required("E-mail obrigatório")
      .email("E-mail inválido"),
    "password": yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Deve conter pelo menos 6 caracteres"),
    "confirmPassword": yup
      .string()
      .required("Confirmação obrigatória")
      .oneOf([yup.ref("password"), null], "Senhas devem ser iguais")
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(formSchema)
    })

    const formSubmit = ({ username, email, password }) => {
        const user = { username, email, password }
        api
        .post("/users/", user)
        .then(() => history.push("/login"))
        .catch(() => console.log("Nome ou e-mail já existente"))
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
                error={errors.email?.message}
                name='email' register={register}
                placeholder='Coloque seu email'
                label='E-mail' />
            </div>
            <div className="inputDiv">
              <Input
                error={errors.password?.message}
                name='password' register={register}
                placeholder='Coloque sua senha'
                label='Senha'
                type='password' />
            </div>
            <div className="inputDiv">
              <Input
                error={errors.confirmPassword?.message}
                name='confirmPassword' register={register}
                placeholder='Confirme sua senha'
                label='Confirmar senha'
                type='password' />
            </div>
            <button type="submit">Criar Conta</button>
            <p>Já possui uma conta? <Link to="/login">Entre aqui!</Link></p>
        </form>
    )
}