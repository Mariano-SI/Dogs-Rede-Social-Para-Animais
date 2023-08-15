import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginForm from '../../Components/LoginForm/LoginForm'
import LoginCreate from '../../Components/LoginCreate/LoginCreate'
import LoginPasswordLost from '../../Components/LoginPasswordLost/LoginPasswordLost'
import LoginPasswordReset from '../../Components/LoginPasswordReset/LoginPasswordReset'

type Props = {}

function Login(props: Props){
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