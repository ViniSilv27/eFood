import styled from 'styled-components'
import { Cores } from '../../styles'

export const Card = styled.div`
  width: 472px;
  overflow: hidden;
  color: ${Cores.rosa};
  font-size: 18px;
  font-weight: bold;
  background-color: ${Cores.branco};
  border: 1px solid ${Cores.rosa};
  position: relative;
`
export const Imagem = styled.img`
  width: 100%;
  height: 216px;
  object-fit: cover;
  display: block;
`
export const CardConteudo = styled.div`
  padding: 8px;
`
export const TituloNota = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Nota = styled.span`
  margin-right: 8px;
  text-align: center;
`
export const Descricao = styled.p`
  font-size: 14px;
  font-weight: normal;
  margin: 16px 0;
  line-height: 24px;
`
export const Botao = styled.button`
  background-color: ${Cores.rosa};
  color: ${Cores.bege};
  border: none;
  padding: 4px 6px;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 12px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Info = styled.span`
  background-color: ${Cores.rosa};
  color: ${Cores.bege};
  font-size: 12px;
  border: none;
  padding: 6px 4px;
  display: inline-block;
  margin-right: 8px;
`
