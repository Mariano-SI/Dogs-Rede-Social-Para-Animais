import { styled } from "styled-components";

export const PhotoCommentsFormStyled = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: stretch;
    margin: 1rem;

    ${(props) =>
            props.single && 
            `
                margin: 1rem 0;
            `
    }

    .textArea{
        display: block;
        width: 100%;
        font-size: 1rem;
        font-family: var(--type-first);
        resize: none;
        border: 1px solid #EEE;
        padding: 0.5rem;
        border-radius: 0.2rem;
        background: #EEE;
        transition: 0.2s;
    }
    .textArea:focus, .textArea:hover{
        outline: none;
        border-color: #FB1;
        background: white;
        box-shadow: 0 0 0 3px  #FEA;
    }

    .newCommentButton{
        border: none;
        cursor: pointer;
        color: #333;
        background-color: transparent;
        font-size: 1rem;
        padding: 0 1rem;
        overflow: hidden;
    }

    .newCommentButton:focus, .newCommentButton:hover{
        outline: none;
    }
    .newCommentButton:focus svg path, .newCommentButton:hover svg path{
        fill: #FEA;
        stroke: #FB1;
    }
    .newCommentButton:focus svg g, .newCommentButton:hover svg  g{
        animation: latir .6s infinite;
    }

    @keyframes latir{
        from{
            opacity: 0;
        }to{
            opacity: 1;
        }
    }
`
    
