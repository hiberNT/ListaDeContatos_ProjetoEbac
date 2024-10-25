import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Input, MainContainer, Titulo } from '../../styles'
import { BotaoCadastrar, Form, Opcao, Opcoes } from './styles'
import { RootReducer } from '../../store'
import { cadastrar } from '../../store/reducers/contatos'
import Contato from '../../models/Costructor_Tarefas'

const categoriasDisponiveis = ['Comum', 'Familia', 'Trabalho', 'Bloqueado']

const Formulario = () => {
  const { categorias } = useSelector((state: RootReducer) => state.filtro)
  const [nome, setNome] = useState('')
  const [contato, setContato] = useState('')
  const [email, setEmail] = useState('')
  const [categoriaSelecionada, setCategoriaSelecionada] =
    useState<string>(categorias)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const CadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    dispatch(
      cadastrar({
        nome,
        telefone: contato,
        email,
        categorias: categoriaSelecionada
      } as Omit<Contato, 'id'>)
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Adicionar Contato</Titulo>
      <Form onSubmit={CadastrarContato}>
        <Input
          type="text"
          placeholder="Nome completo"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
        />
        <Input
          type="number"
          placeholder="Numero"
          value={contato}
          onChange={(evento) => setContato(evento.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <Opcoes>
          <p>Categorias</p>
          {Object.values(categoriasDisponiveis).map((categoriaS) => (
            <Opcao key={categoriaS}>
              <input
                value={categoriaS}
                name="Categoria"
                type="radio"
                onChange={(e) =>
                  setCategoriaSelecionada(e.target.value as string)
                }
                id={categoriaS}
                checked={categoriaSelecionada === categoriaS}
              />{' '}
              <label htmlFor={categoriaS}>{categoriaS}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
