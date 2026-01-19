import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'
import Restaurante from '../../models/Restaurante'
import sushiRestaurante from '../../assents/images/sushirestaurante.png'
import LaDulceItaliana from '../../assents/images/LaDolceItaliana.png'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'

export type Produto = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurantes = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Produto[]
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurantes[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data: Restaurantes[]) => {
        return setRestaurantes(data)
      })
  })
  return (
    <>
      <Header />
      <RestaurantList restaurante={restaurantes as Restaurantes[]} />
    </>
  )
}

export default Home
