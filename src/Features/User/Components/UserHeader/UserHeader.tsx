import React, {useEffect, useState} from 'react'
import { UserHeaderStyled } from './UserHeader.style'
import UserHeaderNav from '../UserHeaderNav/UserHeaderNav'
import { useLocation } from 'react-router-dom'

type Props = {}

const UserHeader = (props: Props) => {
    const [pageTitle, setPageTitle] = useState<string>('');
    const location = useLocation();
    
    
    useEffect(()=>{
        const {pathname} = location;

        switch(pathname){
            case "/conta/postar":
                setPageTitle("Poste Sua Foto");
                break;
            case "/conta/estatisticas":
                setPageTitle("Estatísticas");
                break;
            default:
                setPageTitle("Minha Conta");
        }
    }, [location])

    return (
        <UserHeaderStyled>
            <h1 className='title'>{pageTitle}</h1>
            <UserHeaderNav />
        </UserHeaderStyled>
    )
}

export default UserHeader;