import React, { createContext, useCallback, useEffect, useState } from 'react'
import { GET_USER, TOKEN_POST, VALIDATE_TOKEN } from './Common/api';
import { useNavigate } from 'react-router-dom';

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
  const [logged, setLogged] = useState<boolean|null>(null); //login, setLogin
  const [ loading, setLoading] = useState<boolean>(false);
  const [ error, setError] = useState(null);
  
  const navigate =  useNavigate();
  
  const userLogout = useCallback(async function userLogout(){
    setUserData(null);
    setError(null);
    setLoading(false);
    setLogged(false);
    window.localStorage.setItem("token", '');
  }, []);

  useEffect(()=>{
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if(token){
        try{
          setError(null);
          setLoading(true);

          const {url, options} = VALIDATE_TOKEN(token);
          const response = await fetch(url, options);

          if(!response.ok) throw new Error('Token inválido')
          
          await getUser(token);
        }catch(error){
          userLogout();
        }finally{
          setLoading(false);
        }
        
      }else{
        setLogged(false);
      }
    }
    autoLogin();
  },[])



  async function getUser(token:string){
    const {url, options} = GET_USER(token);
    const userResponse = await fetch(url,options);

    const json = await userResponse.json();

    setUserData(json);
    setLogged(true); 
  }

  async function userLogin(username:string, password:string) {
    try {
      setError(null);
      setLoading(true);

      const {url, options} = TOKEN_POST({username, password});
  
      const tokenResponse = await fetch(url,options);

      if(!tokenResponse.ok) throw new Error(`Error: ${tokenResponse.statusText}`);
      const {token} = await tokenResponse.json();
  
      window.localStorage.setItem('token', token);
  
      await getUser(token);

      navigate('/conta');
    } catch (error) {
      setError(error.message);
      setLogged(false);
    }finally{
      setLoading(false);
    }
  }
  return (
    <UserContext.Provider value={{userLogin, userLogout, userData, error, logged, loading}}>{children}</UserContext.Provider>
  )
}
