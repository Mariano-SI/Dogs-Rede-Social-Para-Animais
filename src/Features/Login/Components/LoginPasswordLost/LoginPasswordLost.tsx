import React from 'react'
import { LoginPasswordLostStyled } from './LoginPasswordLost.style'
import Input from '../../../../Common/Components/Forms/Input/Input'
import Button from '../../../../Common/Components/Forms/Button/Button'
import useForm from '../../../../Common/CustomHooks/useForm'
import useFetch from '../../../../Common/CustomHooks/useFEtch'
import { PASSWORD_LOST } from '../../../../Common/api'
import Error from '../../../../Common/Components/Error/Error'

function LoginPasswordLost():JSX.Element{

  const login = useForm();

  const {data, loading, error, request} = useFetch();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement> ){
    event.preventDefault();

    if(login.validate()){

      const {url, options} = PASSWORD_LOST({login: login.value, url: window.location.href.replace('perdeu', 'resetar')})

      const {json} = await request(url, options);
      console.log(json)
    }

  }

  return (
    <LoginPasswordLostStyled>
      <h1 className='title'>Perdeu a senha?</h1>
      {data ? (
        <p style={{color:"#4C1"}}>{data}</p> 
        ) : (
        <form onSubmit={handleSubmit}>
          <Input label='Email/ Usuário' type='text' name='login' {...login}/>
          {loading? <Button disabled>Enviando...</Button>:<Button>Enviar Email</Button>}
          
        </form>
        )}     
      <Error message={error}/>
    </LoginPasswordLostStyled>
  )
}

export default LoginPasswordLost