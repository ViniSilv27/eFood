import Banner from '../../components/Banner'
import HeaderRestaurante from '../../components/HeaderRestaurante'
import ProductList from '../../components/ProductList'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Restaurantes } from '../Home'

const Restaurante = () => {
  const { id } = useParams<{ id: string }>()

  const [restaurante, setRestaurante] = useState<Restaurantes | null>(null)

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => setRestaurante(data))
  }, [id])

  if (!restaurante) {
    return <h3>Carregando ...</h3>
  }

  return (
    <>
      <HeaderRestaurante />
      <Banner
        imagem={restaurante.capa}
        tipo={restaurante.tipo}
        titulo={restaurante.titulo}
      />
      <ProductList produto={restaurante.cardapio} />
    </>
  )
}

export default Restaurante
