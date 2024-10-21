import { useSelector } from 'react-redux'
import Contatos from '../../Components/Contatos'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state)

  return (
    <MainContainer>
      <Titulo>Lista de Contatos</Titulo>
      <ul>
        {contatos.map((c) => (
          <li key={c.nome}>
            <Contatos
              nome={c.nome}
              telefone={c.telefone}
              email={c.email}
              categoria={c.categoria}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeContatos
