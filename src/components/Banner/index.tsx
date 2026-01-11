import { BannerFundo, Nome, Tipo } from './styles'

export type Props = {
  imagem: string
  titulo: string
  tipo: string
}

const Banner = ({ imagem, titulo, tipo }: Props) => (
  <BannerFundo imagem={imagem}>
    <div className="container">
      <Tipo>{tipo}</Tipo>
      <Nome>{titulo}</Nome>
    </div>
  </BannerFundo>
)

export default Banner
