import Restaurante from '../../models/Restaurante'
import Restaurant from '../Restaurant'
import { Container, Lista } from './styles'

type Props = {
  restaurante: Restaurante[]
}

const RestaurantList = ({ restaurante }: Props) => (
  <Container className="container">
    <Lista>
      {restaurante.map((restaurante) => (
        <Restaurant
          key={restaurante.id}
          nome={restaurante.nome}
          imagem={restaurante.image}
          infos={restaurante.infos}
          nota={restaurante.nota}
          descricao={restaurante.descricao}
          pagina={restaurante.pagina}
        />
      ))}
    </Lista>
  </Container>
)

export default RestaurantList
