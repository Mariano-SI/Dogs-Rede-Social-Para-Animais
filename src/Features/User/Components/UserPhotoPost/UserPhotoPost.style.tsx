import { styled } from "styled-components";

export const UserPhotoPostStyled = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;

    @media (max-width: 40rem) {
        grid-template-columns: 1fr;
    }
    #img{
        margin-bottom: 1rem;
    }
    .preview{
        border-radius: 1rem;
        background-size: cover;
        background-position: center center;
    }   

    .preview::after{
        content: '';
        display: block;
        height: 0px;
        padding-bottom: 100%;
    }   
`