import React from 'react'
import { HomeStyled } from './Home.style'
import Feed from '../../../../Common/Components/Feed/Feed/Feed'
import Loading from '../../../../Common/Components/Loading/Loading'


function Home(){
  return (
    <HomeStyled className='container mainContainer'>
      <Feed/>
    </HomeStyled>
  )
}

export default Home