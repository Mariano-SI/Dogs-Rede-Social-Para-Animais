import React from 'react'
import { NotFoundStyled } from './NotFound.style';

const NotFound = () => {
  return (
    <NotFoundStyled className='container mainContainer'>
        <h1 className='title'>Error: 404</h1>
        <p>Página não encontrada.</p>

    </NotFoundStyled>
  )
}

export default NotFound;