import React, { useContext } from 'react'
import Input from '../../../../Common/Components/Forms/Input/Input';
import Button from '../../../../Common/Components/Forms/Button/Button';
import useForm from '../../../../Common/CustomHooks/useForm';
import { CREATE_USER } from '../../../../Common/api';
import { UserContext } from '../../../../UserContext';
import useFetch from '../../../../Common/CustomHooks/useFEtch';
import Error from '../../../../Common/Components/Error/Error';

type Props = {}

function LoginCreate(props: Props):JSX.Element{
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const {userLogin} = useContext(UserContext);
  const {loading, error, request} = useFetch()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();
    const {url, options} =CREATE_USER({
      username: username.value, 
      email: email.value, 
      password: password.value}
    )
    const {response} = await request(url, options);

    if(response && response.ok){
      userLogin(username.value, password.value);
    }
  }
  return (
    <section className='animeLeft'>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type='text' name='username'{...username}/>
        <Input label="Email" type='email' name='email' {...email}/>
        <Input label="Senha" type='password' name='password'{...password}/>
        {loading ? <Button disabled>Cadastrando...</Button>: <Button>Cadastrar</Button>}
        {error && <Error message={error}/>}
      </form>
    </section>
  )
}

export default LoginCreate