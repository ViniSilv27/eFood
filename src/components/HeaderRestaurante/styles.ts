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
  display: flex;
  justify-content: space-between;
  padding: 64px 0;
`
export const Carrinho = styled.a`
  text-decoration: none;
  color: ${Cores.rosa};
`
