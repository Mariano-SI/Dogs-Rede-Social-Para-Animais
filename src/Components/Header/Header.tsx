import React from 'react'

import { Link } from 'react-router-dom'

type Props = {}

function Header(props: Props){
  return (
    <div>
        <nav className='container'>
            <Link to="/">Home</Link>
            <Link to="/login">Login /Criar</Link>
        </nav>
    </div>
  )
}

export default Header