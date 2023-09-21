import React, { useEffect, useState } from 'react'
import { LoginPasswordResetStyled } from './LoginPasswordReset.style'
import Input from '../../../../Common/Components/Forms/Input/Input';
import useForm from '../../../../Common/CustomHooks/useForm';
import Button from '../../../../Common/Components/Forms/Button/Button';
import { PASSWORD_RESET } from '../../../../Common/api';
import useFetch from '../../../../Common/CustomHooks/useFEtch';
import Error from '../../../../Common/Components/Error/Error';
import { useNavigate } from 'react-router-dom';
import Head from '../../../../Common/Components/Head/Head';

function LoginPasswordReset():JSX.Element{

  const [login, setLogin] = useState<string>('');
  const [key, setKey] = useState<string>('');
  const navigate = useNavigate();

  const password = useForm();
  const{error, loading, request} = useFetch();

  useEffect(()=>{
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key');
    const login = params.get('login');

    if(key && login){
      setKey(key);
      setLogin(login);
    }
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    if(password.validate()){
      const {url, options} = PASSWORD_RESET({
        login,
        key,
        password: password.value
      })
  
      const {response} = await request(url, options);
  
      if(response && response.ok){
        navigate('/login');
      }
      
    }
  }
  

  return (
    <LoginPasswordResetStyled className='animeLeft'>
      <Head title='Resete a senha'/>
      <h1 className="title">Resete a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova senha" type='password' name='password' {...password}/>
        {loading ? <Button disabled>Resetando...</Button> : <Button>Resertar</Button>} 
      </form>
      <Error message={error}/>
    </LoginPasswordResetStyled>
  )
}

export default LoginPasswordReset;