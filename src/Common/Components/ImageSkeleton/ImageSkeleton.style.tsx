import styled from "styled-components";

export const ImageSkeletonStyled = styled.div`
    display: grid;
    .img{
        display: block;
        max-width: 100%;
        grid-area: 1/1;
        opacity: 0;
        transition: 0.2s;
    }
    .skeleton{
        grid-area: 1/1;
        height: 100%;
        background-image:linear-gradient(90deg, #EEE 0px, #fff 50%, #EEE 100%);
        background-color: #EEE;
        background-size: 200%;
        animation: skeleton 1.5s infinite linear;
    }

    @keyframes skeleton{
        from{
            background-position: 0px;
        }
        to{
            background-position: -200%;
        }
    }
`