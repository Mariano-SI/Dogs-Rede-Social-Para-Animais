import React, {useState, useContext, useEffect, useRef} from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../../UserContext'
import {ReactComponent as MinhasFotos} from "../../../../Assets/feed.svg"
import {ReactComponent as Estatisticas} from "../../../../Assets/estatisticas.svg"
import {ReactComponent as AdicionarFoto} from "../../../../Assets/enviar.svg"
import {ReactComponent as Sair} from "../../../../Assets/sair.svg"
import { MobileButtonStyled, UserHeaderNavStyled } from './UserHeaderNav.style'
import useMedia from '../../../../Common/CustomHooks/useMedia'


const UserHeaderNav = () => {

  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const mobile = useMedia('(max-width: 40rem)');
  const {userLogout} = useContext(UserContext);
  const mobileMenuButton = useRef(null);
  const navigate = useNavigate();
    
  function handleLogout(){
    userLogout();
    navigate('/login');
  }
  
  const closeMobileMenu = (event: MouseEvent) => {
    if (
      !mobileMenuButton.current ||
      (mobileMenuButton.current && !mobileMenuButton.current.contains(event.target as Node))
    ) {
      setMobileMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeMobileMenu);
    return () => {
      window.removeEventListener("click", closeMobileMenu);
    };
  }, []);

  return (
    <>
      {mobile && (
        <MobileButtonStyled 
          ref={mobileMenuButton}
          aria-label='Menu' 
          onClick={()=>setMobileMenu(!mobileMenu)}
          className={mobileMenu ? 'mobileButtonActive': 'button'}  
        > 
        </MobileButtonStyled>)
      }

      <UserHeaderNavStyled mobile={mobile} active={mobileMenu}>
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
    </>
  )
}

export default UserHeaderNav