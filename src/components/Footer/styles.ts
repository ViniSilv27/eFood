import styled from 'styled-components'
import { Cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${Cores.bege};
  color: ${Cores.rosa};
  text-align: center;
  padding: 40px 0;
  font-size: 10px;
  display: block;
`
export const RedesSociais = styled.div`
  margin: 32px 0 80px 0;
  display: grid;
  grid-template-columns: repeat(3, 32px);
  place-items: center;
  justify-content: center;
`
