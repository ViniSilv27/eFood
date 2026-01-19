import { Link } from 'react-router-dom'
import logo from '../../assents/images/logo.png'
import { Carrinho, Header, HeaderContainer } from './styles'

const HeaderRestaurante = () => (
  <Header>
    <HeaderContainer className="container">
      <Link to="/">
        <a>Restaurantes</a>
      </Link>
      <img src={logo} alt="Logo do Restaurante"></img>
      <Carrinho href="#">0 produto(s) no carrinho</Carrinho>
    </HeaderContainer>
  </Header>
)

export default HeaderRestaurante
