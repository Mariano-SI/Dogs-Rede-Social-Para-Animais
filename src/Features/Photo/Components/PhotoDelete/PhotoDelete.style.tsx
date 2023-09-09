import { styled } from "styled-components";

export const PhotoDeleteStyled = styled.div`
    .deleteButtton{
        background: #DDD;
        padding: 0.4rem 1rem;
        line-height: 1;
        border: 1px solid transparent;
        font-size: .875rem;
        font-family: var(--type-first);
        cursor: pointer;
        border-radius: 0.4rem;
        transition: .1s;
    }

    .deleteButtton:focus,.deleteButtton:hover {
       outline: none;
       background-color: white;
       box-shadow: 0 0 0 3px #EEE;
       border-color: #333;
    }
`