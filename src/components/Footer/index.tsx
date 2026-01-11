import logo from '../../assents/images/logo.png'
import twitter from '../../assents/images/twitter.png'
import facebook from '../../assents/images/facebook.png'
import instagram from '../../assents/images/instagram.png'
import { FooterContainer, RedesSociais } from './styles'

const Footer = () => (
  <FooterContainer>
    <img src={logo} alt="Logo" />
    <RedesSociais>
      <img src={twitter} alt="Twitter" />
      <img src={facebook} alt="Facebook" />
      <img src={instagram} alt="Instagram" />
    </RedesSociais>
    <p className="container-textos">
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </FooterContainer>
)

export default Footer
