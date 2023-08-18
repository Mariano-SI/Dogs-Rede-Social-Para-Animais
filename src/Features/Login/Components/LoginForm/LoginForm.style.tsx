import { styled } from "styled-components";


export const LoginFormStyled = styled.section`
    .form{
        margin-bottom: 2rem;
    }
    .perdeuLink{
        display: inline-block;
        color: #666;
        padding: .5rem 0;
        line-height: 1;
    }
    .perdeuLink::after{
        content: '';
        height: 2px;
        width: 100%;
        background: currentColor;
        display: block;
    }
    .cadastro{
        margin-top: 4rem;
    }

    .cadastro p{
        margin: 2rem 0;
    }

    .subtitle{
        font-family: var(--type-second);
        line-height: 1;
        font-size: 2rem;
    }

    .subtitle::after{
        content: "";
        display: block;
        background-color: #ddd;
        height: .5rem;
        width: 3rem;
        border-radius: .2rem;
    }

    .buttonCriar{
        text-align: center;
        display: inline-block;
        font-size: 1rem;
        font-family: var(--type-first);
        cursor: pointer;
        border: none;
        border-radius: 0.4rem;
        background: #FB1;
        color: #764701;
        min-width: 8rem;
        padding: 0.8rem 1.2rem;
        box-sizing: border-box;
        transition: 0.1s;
    }

    .buttonCriar:focus{
        outline: none;
        box-shadow: 0 0 0 3px #FEA, 0 0 0 4px #FB1;

    }
`