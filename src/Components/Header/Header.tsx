import React from 'react'
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import { ReactComponent as Usuario } from "../../Assets/usuario.svg";

import { Link } from 'react-router-dom'
import { HeaderStyled } from './Header.style';

type Props = {}

function Header(props: Props):JSX.Element{
  return (
    <HeaderStyled>
        <nav className='container nav' aria-label='Dogs - Home'>
            <Link to="/" className='logo'>
              <Dogs/>
            </Link>
            <Link className='login' to="/login">
              Login /Criar 
              <Usuario className="userIcon"/>
            </Link>
        </nav>
    </HeaderStyled>
  )
}

export default Header