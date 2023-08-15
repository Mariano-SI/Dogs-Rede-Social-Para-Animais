import React from 'react'
import { ButtonStyled } from './Button.style'

interface IButton{
    children: React.ReactNode;
    props?: Array<unknown>;
}

function Button({children, ...props}: IButton){
  return (
    <ButtonStyled {...props}>
        {children}
    </ButtonStyled>
  )
}

export default Button