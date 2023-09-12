import { styled } from "styled-components";


export const FeedPhotosItemStyled = styled.li`
    display: grid ;
    border-radius: .2rem;
    overflow: hidden;
    cursor: pointer;
    &:nth-child(2){
        grid-column: 2/4;
        grid-row: span 2;
    }

    @media (max-width: 40rem) {
        &:nth-child(2){
        grid-column: initial;
        grid-row: initial;
        } 
    }
    div{
        grid-area: 1/1;
    }
    img{
        grid-area: 1/1;
    }
    .views{
        background: rgba(0,0,0,0.3);
        color: white;
        font-size: 1rem;
        text-align: center;
        align-items: center;
        justify-content: center;
        grid-area: 1/1;
        display: none;
    }
    &:hover .views{
        display: flex;
    }

    .viewsIcon{
        width: 16px;
        height: 10px;
        margin-right: .25rem;
        font-size: 1rem;
    }


`