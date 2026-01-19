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
  onClick?: () => void
}

const Product = ({ nome, descricao, imagem, onClick }: Props) => (
  <CardProduto onClick={onClick}>
    <ImagemProduto src={imagem} alt="Produto" />
    <TituloProduto>{nome}</TituloProduto>
    <DescricaoProduto>{descricao}</DescricaoProduto>
    <Botaoproduto>Adiconar ao carrrinho</Botaoproduto>
  </CardProduto>
)

export default Product
