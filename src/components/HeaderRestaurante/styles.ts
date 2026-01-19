import styled from 'styled-components'
import fundo from '../../assents/images/fundo.png'
import { Cores } from '../../styles'

export const Header = styled.header`
  background-image: url(${fundo});
  font-size: 18px;
  font-weight: bold;
  color: ${Cores.rosa};
`
export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 64px 0;
  text-decoration: none;

  a {
    text-decoration: none;
    color: ${Cores.rosa};
    font-size: 18px;
    font-weight: bold;
  }
  img {
    justify-self: center;
  }
`
export const Carrinho = styled.a`
  text-decoration: none;
  color: ${Cores.rosa};
  text-decoration: none;
  justify-self: end;
`
