import React from 'react'
import { FooterStyled } from './Footer.style'
import {ReactComponent as Icon} from "../../../Assets/dogs-footer.svg"

type Props = {}

function Footer(props: Props){
  return (
    <FooterStyled>
      <Icon/>
      <p>Dogs. Alguns direitos reservados.</p>
    </FooterStyled>
  )
}

export default Footer