import React from 'react'
import { UserStyled } from './User.style'
import UserHeader from '../Components/UserHeader/UserHeader'
import { Route, Routes } from 'react-router-dom'
import Feed from '../../Feed/Pages/Feed'
import UserPhotoPost from '../Components/UserPhotoPost/UserPhotoPost'
import UserStats from '../Components/UserStats/UserStats'



const User = () => {
  return (
    <UserStyled className='container'>
      <UserHeader/>
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='/postar' element={<UserPhotoPost/>}/>
        <Route path='/estatisticas' element={<UserStats/>}/>
      </Routes>
    </UserStyled>
  )
}

export default User