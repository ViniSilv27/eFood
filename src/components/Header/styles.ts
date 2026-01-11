import styled from 'styled-components'
import fundo from '../../assents/images/fundo.png'
import { Cores } from '../../styles'

export const HeaderCard = styled.header`
  background-image: url(${fundo});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  text-align: center;

  img {
    margin-bottom: 136px;
  }
`

export const Titulo = styled.h1`
  font-size: 32px;
  font-weight: black;
  color: ${Cores.rosa};
  text-align: center;
`
