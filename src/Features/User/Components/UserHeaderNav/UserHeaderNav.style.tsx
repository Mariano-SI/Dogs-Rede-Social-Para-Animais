import { styled } from "styled-components";

export const UserHeaderNavStyled = styled.nav`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 1rem;

a, button{
     background: #eee;
     border-radius: .2rem;
     height: 40px;
     width: 40px;
     display: flex;
     align-items: center;
     justify-content: center;
     border: 1px solid transparent;
     transition: .1s;
     cursor: pointer;
}
a:hover, button:hover, a:focus, button:focus{
    background: white;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
    outline: none;
}

a.active{
    background-color: white;
    box-shadow:  0 0 0 3px #FEA;
    border-color: #FB1;
}
a.active svg > *{
    fill: #FB1;
}

`