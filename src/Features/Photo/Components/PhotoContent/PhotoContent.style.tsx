import { styled } from "styled-components"

export const PhotoContentStyled = styled.div`
    margin: auto;
    height: 36rem;
    border-radius: 0.2rem;
    background-color: white;
    display: grid;
    grid-template-columns: 36rem 20rem;
    grid-template-rows: auto 1fr auto;
    overflow: hidden;
    opacity: 0;
    transform: scale(.8);
    animation: scaleUp .3s forwards;

    @media (max-width: 64rem){
        height: auto;
        max-height: calc(100vh - 4rem);
        overflow-y: auto;
        grid-template-columns: minmax(20rem, 40rem);

        .img{
            grid-row: 1;
        }
    }

    @keyframes scaleUp{
        to{
            opacity: 1;
            transform: initial;
        }
    }
  
    .imageDetails{
        padding: 2rem 2rem 0 2rem;
    }
    .img{
        grid-row: 1/4;
    }

    .author{
        opacity: 0.5;
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .author a:hover{
        text-decoration: underline;
    }

    .views{
        display: flex;
        align-items: center;
    }
    .viewsIcon{
        margin-right: .5rem;
    }

    .attributes{
        display: flex;
        font-size:1.125rem ;
        font-weight: bold;
        margin-top: 1rem;
        margin-bottom:2rem;
    }

    .attributes li{
       margin-right: 2rem;
    }

    .attributes li::before{
       content: '';
       display: inline-block;
       height: 20px;
       margin-right: .5rem;
       position: relative;
       top: 3px;
       width: 2px;
       background: #333;
       margin-top: 5px;
    }
`