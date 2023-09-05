import React from 'react'
import { UserStyled } from './User.style'
import UserHeader from '../Components/UserHeader/UserHeader'
import { Route, Routes } from 'react-router-dom'
import UserPhotoPost from '../Components/UserPhotoPost/UserPhotoPost'
import UserStats from '../Components/UserStats/UserStats'
import Feed from '../../../Common/Components/Feed/Feed/Feed'



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