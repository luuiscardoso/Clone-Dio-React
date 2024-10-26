import React from 'react'
import { InputContainer, InputContent, IconContainer } from './styles'


 const Input = ({leftIcon, placeholder, name}) => {
  return (
    <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <InputContent placeholder={placeholder} name={name}></InputContent>
    </InputContainer>
  )
}

export {Input}
