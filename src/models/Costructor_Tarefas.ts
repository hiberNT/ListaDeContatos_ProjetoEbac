class Contato {
  nome: string
  telefone: string
  email: string
  categoria: string
  id: number

  constructor(
    nome: string,
    telefone: string,
    email: string,
    categoria: string,
    id: number
  ) {
    this.nome = nome
    this.telefone = telefone
    this.email = email
    this.categoria = categoria
    this.id = id
  }
}

export default Contato
