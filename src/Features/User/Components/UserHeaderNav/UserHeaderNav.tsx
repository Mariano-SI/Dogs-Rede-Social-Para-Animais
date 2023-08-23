import React, {useState, useContext} from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../../UserContext'
import {ReactComponent as MinhasFotos} from "../../../../Assets/feed.svg"
import {ReactComponent as Estatisticas} from "../../../../Assets/estatisticas.svg"
import {ReactComponent as AdicionarFoto} from "../../../../Assets/enviar.svg"
import {ReactComponent as Sair} from "../../../../Assets/sair.svg"
import { UserHeaderNavStyled } from './UserHeaderNav.style'

type Props = {
   
}

const UserHeaderNav = ({props}: Props) => {

  const [mobile, setMobile] = useState(null);
  const {userLogout} = useContext(UserContext);
    const navigate = useNavigate();
    
  function handleLogout(){
    userLogout();
    navigate('/login')
  }

  return (
    <UserHeaderNavStyled>
        <NavLink to="/conta" end >
            <MinhasFotos/>
             {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
            <Estatisticas/> 
            {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/conta/postar">
            <AdicionarFoto/>
            {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={handleLogout}>
            <Sair/>
            {mobile && "Sair"}
        </button>
    </UserHeaderNavStyled>
  )
}

export default UserHeaderNav