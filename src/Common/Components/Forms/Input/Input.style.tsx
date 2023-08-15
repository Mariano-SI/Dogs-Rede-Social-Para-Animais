import { styled } from "styled-components";

export const InputStyled = styled.div`
    margin-bottom: 1rem;
    .input{
        border: 1px solid #EEE;
        display: block;
        width: 100%;
        font-size: 1rem;
        padding: .8rem;
        border-radius: 0.4rem;
        background: #EEE;
        transition: .2s;
    }

    .input:focus,
    .input:hover{
        outline:none;
        border-color: #FB1;
        background-color: white;
        box-shadow: 0 0 0 3px #FEA;
    }

    .label{
        display: block;
        font-size: 1rem;
        line-height: 1;
        padding-bottom: .5rem;
    }

    .errorMessage{
        color: #F31;
        font-size: .875rem;
        margin-top: .25rem;
    }
`