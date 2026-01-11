import logo from '../../assents/images/logo.png'
import * as S from './styles'

const Header = () => (
  <S.HeaderCard>
    <img src={logo} alt="logo" />
    <div className="container-textos">
      <S.Titulo>
        Viva experiências gastronômicas no conforto da sua casa
      </S.Titulo>
    </div>
  </S.HeaderCard>
)

export default Header
