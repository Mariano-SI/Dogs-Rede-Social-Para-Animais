import React, { createContext, useState } from 'react'
import { GET_USER, TOKEN_POST } from './Common/api';

interface IUserContext{
    children:React.ReactNode
}

interface UserInfos{
    id: number;
    username: string;
    nome: string;
    email: string;   
}

export const UserContext = createContext();

export function UserStorage({children}: IUserContext){
  const [userData, setUserData] = useState<UserInfos|null>(null);
  const [logged, setLogged] = useState<boolean|null>(null);
  const [ loading, setLoading] = useState<boolean>(false);
  const [ error, setError] = useState(null);

  async function getUser(token:string){
    const {url, options} = GET_USER(token);
    const userResponse = await fetch(url,options);

    const json = await userResponse.json();

    setUserData(json);
    setLogged(true);
    console.log(json)
    
  }
  async function userLogin(username:string, password:string) {
    const {url, options} = TOKEN_POST({username, password});

    const tokenResponse = await fetch(url,options);
    const {token} = await tokenResponse.json();

    window.localStorage.setItem('token', token);

    getUser(token)
  }
  return (
    <UserContext.Provider value={{userLogin, userData}}>{children}</UserContext.Provider>
  )
}
