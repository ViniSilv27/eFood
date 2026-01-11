class Restaurante {
  id: number
  nome: string
  descricao: string
  nota: number
  infos: string[]
  image: string
  pagina: string

  constructor(
    id: number,
    nome: string,
    descricao: string,
    nota: number,
    infos: string[],
    image: string,
    pagina: string
  ) {
    this.id = id
    this.nome = nome
    this.descricao = descricao
    this.nota = nota
    this.infos = infos
    this.image = image
    this.pagina = pagina
  }
}

export default Restaurante
