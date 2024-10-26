import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    font-family: Open Sans;
  }
  
  body, html {
    background-color: #1E192C;
    color: #FFFFFF;
    height: 100%;
  }

  #root {
    height: 100%;
}
`