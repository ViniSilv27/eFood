import styled from 'styled-components'
import { Cores } from '../../styles'
import { Botaoproduto } from '../Product/styles'

export const ContainerProduto = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  padding-top: 56px;
  padding-bottom: 120px;
`

export const Modal = styled.div`
  background-color: ${Cores.rosa};
  width: 1024px;
  max-width: 90%;
  padding: 32px;
  display: none;
  justify-content: space-between;
  align-items: stretch;
  position: relative;

  &.visivel {
    display: flex;
  }

  img {
    width: 280px;
    height: 280px;
    margin-right: 24px;
    object-fit: cover;
  }

  .icon {
    position: absolute;
    top: 16px;
    right: 16px;
    height: 16px;
    width: 16px;
    cursor: pointer;
  }
`
export const ModalConteudo = styled.div`
  color: ${Cores.branco};
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    font-weight: regular;
    margin: 16px 0;
  }

  ${Botaoproduto} {
    width: auto;
    align-self: flex-start;
    margin-top: auto;
    margin-bottom: 16px;
    padding: 4px 8px;
  }
`
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: grid;
  place-items: center;
  z-index: 1000;
`
