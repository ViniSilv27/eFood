import pizza from '../../assents/images/pizza.png'
import {
  Botaoproduto,
  CardProduto,
  DescricaoProduto,
  ImagemProduto,
  TituloProduto
} from './styles'

type Props = {
  nome: string
  descricao: string
  imagem: string
}

const Product = ({ nome, descricao, imagem }: Props) => (
  <CardProduto>
    <ImagemProduto src={imagem} alt="Produto" />
    <TituloProduto>{nome}</TituloProduto>
    <DescricaoProduto>{descricao}</DescricaoProduto>
    <Botaoproduto>Adiconar ao carrrinho</Botaoproduto>
  </CardProduto>
)

export default Product
