import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from '../../Components/LoginForm/LoginForm'
import LoginCreate from '../../Components/LoginCreate/LoginCreate'
import LoginPasswordLost from '../../Components/LoginPasswordLost/LoginPasswordLost'
import LoginPasswordReset from '../../Components/LoginPasswordReset/LoginPasswordReset'
import { UserContext } from '../../../../UserContext'
import { LoginStyled } from './Login.style'
import {login} from "../../../../Assets/login.jpg"

type Props = {}

function Login(props: Props){

  const {logged} = useContext(UserContext);
  
  if(logged){
    return <Navigate to="/conta"/>
  }
  return (
    <LoginStyled>
      <div className='loginForms'>
        <Routes>
          <Route path='/' element={<LoginForm/>}/>
          <Route path='criar' element={<LoginCreate/>}/>
          <Route path='perdeu' element={<LoginPasswordLost/>}/>
          <Route path='resetar' element={<LoginPasswordReset/>}/>
        </Routes>
      </div>
    </LoginStyled>
  )
}

export default Login