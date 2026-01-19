import { Restaurantes } from '../../pages/Home'
import Restaurant from '../Restaurant'
import { Container, Lista } from './styles'

type Props = {
  restaurante: Restaurantes[]
}

const RestaurantList = ({ restaurante }: Props) => (
  <Container className="container">
    <Lista>
      {restaurante.map((restaurante) => (
        <Restaurant
          key={restaurante.id}
          nome={restaurante.titulo}
          imagem={restaurante.capa}
          tipo={restaurante.tipo}
          destaque={restaurante.destacado}
          nota={restaurante.avaliacao}
          descricao={restaurante.descricao}
          id={restaurante.id}
        />
      ))}
    </Lista>
  </Container>
)

export default RestaurantList
