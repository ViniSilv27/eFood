import logo from '../../assents/images/logo.png'
import { Carrinho, Header, HeaderContainer } from './styles'

const HeaderRestaurante = () => (
  <Header>
    <HeaderContainer className="container">
      <h3>Restaurantes</h3>
      <img src={logo} alt="Logo do Restaurante"></img>
      <Carrinho href="#">0 produto(s) no carrinho</Carrinho>
    </HeaderContainer>
  </Header>
)

export default HeaderRestaurante
