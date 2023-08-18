import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../../../Common/Components/Forms/Input/Input';
import Button from '../../../../Common/Components/Forms/Button/Button';
import useForm from '../../../../Common/CustomHooks/useForm';
import { UserContext } from '../../../../UserContext';

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
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name='username' {...username}/>
        <Input label="Senha" type="password" name='password' {...password}/>

        {loading ? (
          <Button disabled>Carregando</Button>
        ):(
          <Button>Entrar</Button>
        )}
        {error && <p>{error}</p>}
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm