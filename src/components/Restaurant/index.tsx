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
  tipo: string
  destaque: boolean
  nota: number
  descricao: string
  id: number
}

const Restaurant = ({
  nome,
  imagem,
  tipo,
  destaque,
  nota,
  descricao,
  id
}: Props) => (
  <Card>
    <Infos>
      <Info>{tipo}</Info>
      {destaque && <Info>Destaque</Info>}
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
      <Link to={`/restaurante/${id}`}>
        <Botao>Saiba mais</Botao>
      </Link>
    </CardConteudo>
  </Card>
)

export default Restaurant
