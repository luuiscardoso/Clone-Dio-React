import React from 'react'
import { FormContainer, TitleRegister, TextRegister, LinksContainer, StyledLink } from './styles'
import { MdEmail, MdLock } from 'react-icons/md'
import { Input } from '../Input/input'
import { Button } from '../Button/button'
import { Link } from '../Header/styles'

 const Form = ({tittle, text}) => {
  return (
    <FormContainer>
      <TitleRegister>{tittle}</TitleRegister>
      <TextRegister>{text}</TextRegister>
      <form >
        <Input leftIcon={<MdEmail/>} placeholder={"E-mail"} name={"e-mail"} type="text"/>
        <Input leftIcon={<MdLock/>} placeholder={"Password"} name={"password"} type="password"/>
        <Button tittle={"Entrar"} variant="secondary"></Button>
        <LinksContainer>
          <StyledLink linkColor="#E5E044">Esqueci minha senha</StyledLink>
          <StyledLink linkColor="#23DD7A">Criar conta</StyledLink>
        </LinksContainer>
      </form>
      
    </FormContainer>
  )
}

export {Form}