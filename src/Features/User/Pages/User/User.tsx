import React, { useContext } from 'react'
import { UserStyled } from './User.style'
import UserHeader from '../../Components/UserHeader/UserHeader'
import { Route, Routes } from 'react-router-dom'
import UserPhotoPost from '../../Components/UserPhotoPost/UserPhotoPost'
import UserStats from '../../Components/UserStats/UserStats'
import Feed from '../../../../Common/Components/Feed/Feed/Feed'
import { UserContext } from '../../../../UserContext'
import NotFound from '../../../../Common/Components/NotFound/NotFound'



const User = () => {

  const {userData} = useContext(UserContext);

  return (
    <UserStyled className='container'>
      <UserHeader/>
      <Routes>
        <Route path='/' element={<Feed user={userData.id}/>}/>
        <Route path='/postar' element={<UserPhotoPost/>}/>
        <Route path='/estatisticas' element={<UserStats/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </UserStyled>
  )
}

export default User