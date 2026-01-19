import { useState } from 'react'
import Product from '../Product'
import { ContainerProduto, Modal, ModalConteudo, Overlay } from './styles'
import { Botaoproduto } from '../Product/styles'
import fechar from '../../assents/images/fechar.png'
import { Produto } from '../../pages/Home'

type Props = {
  produto: Produto[]
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ProductList = ({ produto }: Props) => {
  const limitadorDeTexto = (texto: string, limite = 120) => {
    return texto.length > limite ? texto.slice(0, limite + 1) + '...' : texto
  }
  const [produtoSelecionado, setProdutoSelecionado] = useState<Produto | null>(
    null
  )

  return (
    <>
      <ContainerProduto className="container">
        {produto.map((produto) => (
          <Product
            key={produto.id}
            nome={produto.nome}
            descricao={limitadorDeTexto(produto.descricao)}
            imagem={produto.foto}
            onClick={() => setProdutoSelecionado(produto)}
          />
        ))}
      </ContainerProduto>
      {produtoSelecionado && (
        <Overlay onClick={() => setProdutoSelecionado(null)}>
          <Modal
            className="container visivel "
            onClick={(e) => e.stopPropagation()}
          >
            <img src={produtoSelecionado.foto} alt="modelo produto" />
            <ModalConteudo>
              <h4>{produtoSelecionado.nome}</h4>
              <p>
                {' '}
                {produtoSelecionado.descricao} <br /> <br />
                serve: {produtoSelecionado.porcao}
              </p>
              <Botaoproduto>
                Adiconar ao carrinho - {formataPreco(produtoSelecionado.preco)}
              </Botaoproduto>
            </ModalConteudo>
            <img
              src={fechar}
              alt="icone de fechar"
              className="icon"
              onClick={() => setProdutoSelecionado(null)}
            />
          </Modal>
        </Overlay>
      )}
    </>
  )
}

export default ProductList
