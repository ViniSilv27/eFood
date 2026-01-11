import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import Restaurante from '../../models/Restaurante'
import sushiRestaurante from '../../assents/images/sushirestaurante.png'
import LaDulceItaliana from '../../assents/images/LaDolceItaliana.png'
import Footer from '../../components/Footer'

const ListaDeRestaurante: Restaurante[] = [
  {
    id: 1,
    nome: 'Hioki Sushi',
    image: sushiRestaurante,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    nota: 4.9,
    infos: ['Destaque da semana', 'Japonesa'],
    pagina: '/'
  },
  {
    id: 2,
    nome: 'La Dolce Vita Trattoria',
    image: LaDulceItaliana,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nota: 4.6,
    infos: ['Italiana'],
    pagina: '/restaurantes'
  },
  {
    id: 2,
    nome: 'La Dolce Vita Trattoria',
    image: LaDulceItaliana,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nota: 4.6,
    infos: ['Italiana'],
    pagina: '/restaurantes'
  },
  {
    id: 2,
    nome: 'La Dolce Vita Trattoria',
    image: LaDulceItaliana,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nota: 4.6,
    infos: ['Italiana'],
    pagina: '/restaurantes'
  },
  {
    id: 2,
    nome: 'La Dolce Vita Trattoria',
    image: LaDulceItaliana,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nota: 4.6,
    infos: ['Italiana'],
    pagina: '/restaurantes'
  },
  {
    id: 2,
    nome: 'La Dolce Vita Trattoria',
    image: LaDulceItaliana,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nota: 4.6,
    infos: ['Italiana'],
    pagina: '/restaurantes'
  }
]

const Home = () => (
  <>
    <Header />
    <RestaurantList restaurante={ListaDeRestaurante} />
  </>
)

export default Home
