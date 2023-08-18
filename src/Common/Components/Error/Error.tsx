import React from 'react'

type Props = {
    message: string;
}

const Error = ({message}: Props) => {

  if(!message) return null;
  return (
    <p style={{color:"#F31", margin:"1rem 0"}}>{message}</p>
  )
}

export default Error