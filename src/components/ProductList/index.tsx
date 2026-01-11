import Produto from '../../models/Produto'
import Product from '../Product'
import { Container } from '../RestaurantList/styles'
import { ContainerProduto } from './styles'

type Props = {
  produto: Produto[]
}

const ProductList = ({ produto }: Props) => (
  <ContainerProduto className="container">
    {produto.map((produto) => (
      <Product
        key={produto.id}
        nome={produto.nome}
        descricao={produto.descricao}
        imagem={produto.imagem}
      />
    ))}
  </ContainerProduto>
)

export default ProductList
