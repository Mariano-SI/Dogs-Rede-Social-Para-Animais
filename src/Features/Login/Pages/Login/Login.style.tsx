import { styled } from "styled-components";

export const LoginStyled = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
    gap: 2rem;

    &::before{
        display: block;
        content: "";
        background: url("https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" )no-repeat center center;
        background-size: cover;
    }

    .loginForms{
        max-width: 30rem;
        padding: 2rem;
    }

    @media (max-width: 40rem) {
        grid-template-columns: 1fr;
        &::before{
            display: none;
        }
        .loginForms{
            max-width: 100%;
        }
    }
    
`