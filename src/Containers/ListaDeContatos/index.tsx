import { useSelector } from 'react-redux'
import Contatos from '../../Components/Contatos'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termo, categorias } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let ContatosFiltrados = itens

    if (termo !== undefined) {
      ContatosFiltrados = ContatosFiltrados.filter(
        (item) =>
          item.nome.toLocaleLowerCase().search(termo.toLocaleLowerCase()) >= 0
      )
      if (categorias === 'Familia') {
        ContatosFiltrados = ContatosFiltrados.filter(
          (item) => item.categorias === 'Familia'
        )
      }

      if (categorias === 'Comum') {
        ContatosFiltrados = ContatosFiltrados.filter(
          (item) => item.categorias === 'Comum'
        )
      }

      if (categorias === 'Trabalho') {
        ContatosFiltrados = ContatosFiltrados.filter(
          (item) => item.categorias === 'Trabalho'
        )
      }

      if (categorias === 'Bloqueado') {
        ContatosFiltrados = ContatosFiltrados.filter(
          (item) => item.categorias === 'Bloqueado'
        )
      }

      return ContatosFiltrados
    } else {
      return itens
    }
  }

  const tarefas = filtraContatos()

  return (
    <MainContainer>
      <Titulo>Lista de Contatos</Titulo>
      <ul>
        {tarefas.map((c) => (
          <li key={c.nome}>
            <Contatos
              id={c.id}
              nome={c.nome}
              telefone={c.telefone}
              email={c.email}
              categorias={c.categorias}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
