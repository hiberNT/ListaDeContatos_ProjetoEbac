class Contato {
  nome: string
  telefone: string
  email: string
  categorias: string
  id: number

  constructor(
    nome: string,
    telefone: string,
    email: string,
    categorias: string,
    id: number
  ) {
    this.nome = nome
    this.telefone = telefone
    this.email = email
    this.categorias = categorias
    this.id = id
  }
}

export default Contato
