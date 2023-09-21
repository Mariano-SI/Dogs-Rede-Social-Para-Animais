import React from 'react'
import { HomeStyled } from './Home.style'
import Feed from '../../../../Common/Components/Feed/Feed/Feed'
import Loading from '../../../../Common/Components/Loading/Loading'
import Head from '../../../../Common/Components/Head/Head'


function Home(){
  return (
    <HomeStyled className='container mainContainer'>
      <Head title='Fotos' description='Home do site dogs, com o feed de fotos.'/>
      <Feed/>
    </HomeStyled>
  )
}

export default Home