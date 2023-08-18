import React, { useContext } from 'react'
import { ReactComponent as Dogs } from "../../../Assets/dogs.svg";
import { ReactComponent as Usuario } from "../../../Assets/usuario.svg";

import { Link } from 'react-router-dom'
import { HeaderStyled } from './Header.style';
import { UserContext } from '../../../UserContext';

type Props = {}

function Header(props: Props):JSX.Element{

  const {userData} = useContext(UserContext);

  return (
    <HeaderStyled>
        <nav className='container nav' aria-label='Dogs - Home'>
            <Link to="/" className='logo'>
              <Dogs/>
            </Link>
            {userData ? (
               <Link className='login' to="/conta">
                {userData.nome}
                <Usuario className="userIcon"/>
             </Link>
            ):(
            <Link className='login' to="/login">
              Login /Criar 
              <Usuario className="userIcon"/>
            </Link>
            )}
        </nav>
    </HeaderStyled>
  )
}

export default Header