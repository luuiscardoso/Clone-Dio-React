import React from 'react'
import { MainContainer, SectionText, SectionForm } from './styles'
import { Header } from '../../components/Header/header'
import {Form} from '../../components/Form/form'

export default function Cadastro() {
  return (
    <>
      <Header/>
      <MainContainer>
        <SectionText>
          <p>A plataforma para você aprender <br/> com experts, dominar as principais <br/>
            tecnologias e entrar mais rápido <br/> nas empresas mais desejadas.
          </p>
        </SectionText>
        <SectionForm>
            <Form tittle={"Faça seu cadastro"} text={"Ou faça seu login e make the change._"} linkColor= "#E5E044"></Form>
        </SectionForm>
      </MainContainer>
    </>
  )
}
