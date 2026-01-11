import {
  Botao,
  Card,
  CardConteudo,
  Descricao,
  Imagem,
  Nota,
  TituloNota,
  Infos,
  Info
} from './styles'
import strela from '../../assents/images/estrela.png'
import { Link } from 'react-router-dom'

type Props = {
  nome: string
  imagem: string
  infos: string[]
  nota: number
  descricao: string
  pagina: string
}
const Restaurant = ({
  nome,
  imagem,
  infos,
  nota,
  descricao,
  pagina
}: Props) => (
  <Card>
    <Infos>
      {infos.map((info) => (
        <Info key={info}>{info}</Info>
      ))}
    </Infos>
    <Imagem src={imagem} alt="Sushi Restaurante" />
    <CardConteudo>
      <TituloNota>
        <h2>{nome}</h2>
        <div>
          <Nota>{nota}</Nota>
          <img src={strela} alt="Estrela" />
        </div>
      </TituloNota>
      <Descricao>{descricao}</Descricao>
      <Link to={pagina}>
        <Botao>Saiba mais</Botao>
      </Link>
    </CardConteudo>
  </Card>
)

export default Restaurant
