import React from 'react'
import { Container, DivContent, Link } from './styles' 
import logo from '../../assets/logo-dio.png'
import { Button } from '../Button/button'

const Header = () => {
  return (
    <Container>
      <DivContent>
        <img src={logo} alt='logo dio'/>
      </DivContent>
      <DivContent>
        <Link href='#'>Home</Link>
        <Button tittle="Entrar"/>
        <Button tittle="Cadastrar"/>
      </DivContent>
    </Container>
  )
}

export {Header}
