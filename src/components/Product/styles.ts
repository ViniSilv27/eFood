import styled from 'styled-components'
import { Cores } from '../../styles'

export const CardProduto = styled.div`
  max-width: 320px;
  background-color: ${Cores.rosa};
  color: ${Cores.bege};
  padding: 8px;
  font-weight: bold;
`
export const ImagemProduto = styled.img`
  width: 100%;
`
export const TituloProduto = styled.h2`
  font-size: 18px;
  padding: 8px 0;
`
export const DescricaoProduto = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
`
export const Botaoproduto = styled.button`
  width: 100%;
  padding: 4px 0;
  border: none;
  background-color: ${Cores.bege};
  color: ${Cores.rosa};
  font-size: 14px;
  font-weight: bold;
`
