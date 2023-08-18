import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../../../Common/Components/Forms/Input/Input';
import Button from '../../../../Common/Components/Forms/Button/Button';
import useForm from '../../../../Common/CustomHooks/useForm';
import { UserContext } from '../../../../UserContext';
import Error from '../../../../Common/Components/Error/Error';
import { LoginFormStyled } from './LoginForm.style';


type Props = {}

function LoginForm(props: Props): JSX.Element{
  const username = useForm();
  const password = useForm();

  const {userLogin, error, loading} = useContext(UserContext);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement> ){
    event.preventDefault();

    if(username.validate() && password.validate()){
      userLogin(username.value, password.value);
    }
  }

  return (
    <LoginFormStyled className="animeLeft">
      <h1 className='title'>Login</h1>
      <form className='form' onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name='username' {...username}/>
        <Input label="Senha" type="password" name='password' {...password}/>

        {loading ? (
          <Button disabled>Carregando</Button>
        ):(
          <Button>Entrar</Button>
        )}
        {error && <Error message={error}/>}
      </form>
      <Link className='perdeuLink' to="/login/perdeu">Perdeu a Senha?</Link>
      <div className='cadastro'>
        <h2 className='subtitle'>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
          <Link className="buttonCriar" to="/login/criar">Cadastro</Link>
      </div>
    </LoginFormStyled>
  )
}

export default LoginForm