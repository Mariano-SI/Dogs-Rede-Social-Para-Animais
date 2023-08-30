import { styled } from "styled-components";

export const UserHeaderNavStyled = styled.nav`

    ${(props) =>
        !props.mobile ? 
        `
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
        `:
        `
            display: block;
            position: absolute;
            top: 70px;
            right: 0px;
            padding: 0 1rem;
            box-shadow: 0 1px 2px rgba(0,0,0,.2);
            border-radius: .2rem;
            transform: translateX(-10px);
            opacity: 0;
            background: white;

            a, button{
                display: flex;
                align-items: center;
                background:none;
                width:100%;
                border:none;
                border-bottom: 1px solid #EEE;
                padding: .5rem 0;
                cursor: pointer;
            }
            a:hover svg > *, button:hover svg > *{
                fill: #FB1;
            }
            svg {
                margin-right: .5rem;
            }

            button{
                border-bottom: none;
            }
        `
    }
    ${(props) =>
        props.active && `
            transition: .3s;
            transform: initial;
            opacity: 1;
            z-index: 100;
        `
    }
   
`
export const MobileButtonStyled = styled.button`
     background: #eee;
     padding:0px;
     border-radius: .2rem;
     height: 40px;
     width: 40px;
     display: flex;
     align-items: center;
     justify-content: center;
     border: 1px solid transparent;
     transition: .1s;
     cursor: pointer;

     &::after{
        content: '';
        display: block;
        width: 1.2rem;
        height: 2px;
        border-radius: 2px;
        background-color: currentColor;
        box-shadow: 0px 6px currentColor, 0 -6px currentColor;
        transition: 0.2s;
    }
    &:focus, &:hover, .mobileButtonActive{
        outline: none;
        background-color: white;
        box-shadow:  0 0 0 3px #FEA;
        border-color: #FB1;
        color: #FB1;
    }

    .mobileButtonActive&::after{
        transform: rotate(-90deg);
        width:4px;
        height: 4px;
        box-shadow: 0px 8px currentColor, 0 -8px currentColor;
    }
        
`