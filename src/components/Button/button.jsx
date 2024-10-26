import React from 'react'
import { ButtonDiv } from './styles'

const Button = ({tittle, variant = "primary"}) => {
  return (
    <ButtonDiv variant={variant}>{tittle}</ButtonDiv>
  )
}

export {Button} 
