import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../../../Common/Components/Forms/Input/Input';
import Button from '../../../../Common/Components/Forms/Button/Button';
import useForm from '../../../../Common/CustomHooks/useForm';
import { TOKEN_POST, GET_USER } from '../../../../Common/api';

type Props = {}

function LoginForm(props: Props): JSX.Element{
  const username = useForm();
  const password = useForm();

  useEffect(()=>{
    const token = window.localStorage.getItem('token');
    if(token) getUser(token)
  },[])
  
  async function getUser(token:string){
    const {url, options} = GET_USER(token)
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement> ){
    event.preventDefault();

    if(username.validate() && password.validate()){
      const{url, options} = TOKEN_POST({username: username.value,password: password.value})

    const response = await fetch(url, options);

    const json = await response.json();
    
    window.localStorage.setItem('token', json.token);

    getUser(json.token);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name='username' {...username}/>
        <Input label="Senha" type="password" name='password' {...password}/>

        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm