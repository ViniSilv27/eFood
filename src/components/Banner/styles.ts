import styled from 'styled-components'
import fundoBanner from '../../assents/images/LaDolceItaliana.png'
import { Cores } from '../../styles'
import { Props } from '.'

type ContainerProps = Omit<Props, 'tipo' | 'titulo'>

export const BannerFundo = styled.section<ContainerProps>`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)),
    url(${(props) => props.imagem});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: ${Cores.branco};
  font-size: 32px;
`
export const Tipo = styled.h1`
  padding: 24px 0 160px; 172;
  font-weight: 100;
  font-style: thin;
`

export const Nome = styled.h2`
  padding-bottom: 24px;
  font-weight: 900;
`
