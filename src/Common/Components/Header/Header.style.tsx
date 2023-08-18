import { styled } from "styled-components";



export const HeaderStyled = styled.header`
    box-shadow: 0px 1px 1px rgba(0,0,0,0.1);
    position: fixed;
    width: 100%;
    z-index: 100;
    background-color: white;
    top: 0;

    .nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 4rem;
    }

    .logo{
        padding: 0.5rem 0;
    }

    .login{
        color: #333;
        display: flex;
        justify-content: space-between;
    }
    .userIcon{
        display: inline-block;
        width: 14px;
        height: 17px;
        margin-left: 0.5rem;
        position: relative;
        top: -1px;
    }
    .login::after{
        
    }
`