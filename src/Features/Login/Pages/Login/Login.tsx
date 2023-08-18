import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginForm from '../../Components/LoginForm/LoginForm'
import LoginCreate from '../../Components/LoginCreate/LoginCreate'
import LoginPasswordLost from '../../Components/LoginPasswordLost/LoginPasswordLost'
import LoginPasswordReset from '../../Components/LoginPasswordReset/LoginPasswordReset'
import { UserContext } from '../../../../UserContext'

type Props = {}

function Login(props: Props){

  const {logged} = useContext(UserContext);
  
  if(logged){
    return <Navigate to="/conta"/>
  }
  return (
    <div>

      <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='criar' element={<LoginCreate/>}/>
        <Route path='perdeu' element={<LoginPasswordLost/>}/>
        <Route path='resetar' element={<LoginPasswordReset/>}/>
      </Routes>

    </div>
  )
}

export default Login