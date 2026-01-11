import styled, { createGlobalStyle } from 'styled-components'

export const Cores = {
  rosa: '#E66767',
  branco: '#FFF8F2',
  bege: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: 'Roboto', sans-serif;
}

body {
background-color: ${Cores.branco}
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}

.container-textos{
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
}
`
