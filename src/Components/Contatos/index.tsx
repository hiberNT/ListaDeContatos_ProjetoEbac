import { useEffect, useState } from 'react'
import { TiEdit, TiTrash, TiPhoneOutline, TiMail } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import {
  BarraAcoes,
  Botao,
  BotaoCancelar,
  BotaoSalvar,
  Card,
  ContainerInputs,
  FavoritadoBtn,
  FavoritoBtn,
  FiltroBotao,
  InputContainer
} from './style'
import {
  AiFillSignature,
  AiOutlineCheck,
  AiOutlineClose,
  AiFillStar
} from 'react-icons/ai'
import {
  remover,
  editar,
  adicionarFavorito,
  removerFavorito
} from '../../store/reducers/contatos'
import Contato from '../../models/Costructor_Tarefas'
import { RootReducer } from '../../store'

type Props = Contato

const Contatos = ({
  nome: nomeOriginal,
  telefone: telefoneOriginial,
  email: emailOriginal,
  categorias,
  id
}: Props) => {
  const dispatch = useDispatch()

  const { Favoritado } = useSelector((state: RootReducer) => state.contatos) // Acessando o estado dos favoritos
  const [estaEditando, setestaEditando] = useState(false)
  const [eFavorito, seteFavorito] = useState(false)
  const [nome, setnome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setnome(nomeOriginal),
        setTelefone(telefoneOriginial),
        setEmail(emailOriginal)
    }
  }, [nomeOriginal, telefoneOriginial, emailOriginal])

  useEffect(() => {
    seteFavorito(Favoritado.includes(id))
  }, [Favoritado, id])

  function cancelarEdicao() {
    setestaEditando(false)
    setnome(nomeOriginal)
    setTelefone(telefoneOriginial)
    setEmail(emailOriginal)
  }

  return (
    <>
      <Card>
        <ContainerInputs>
          <InputContainer>
            <AiFillSignature />
            <input
              type="name"
              placeholder="Seu nome completo"
              value={nome}
              disabled={!estaEditando}
              onChange={(evento) => setnome(evento.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <TiPhoneOutline />
            <input
              type="tel"
              placeholder="Telefone"
              value={telefone}
              disabled={!estaEditando}
              onChange={(evento) => setTelefone(evento.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <TiMail />
            <input
              type="email"
              placeholder="Email"
              value={email}
              disabled={!estaEditando}
              onChange={(evento) => setEmail(evento.target.value)}
            />
          </InputContainer>
        </ContainerInputs>
        <BarraAcoes>
          {estaEditando ? (
            <>
              <BotaoSalvar
                onClick={() => {
                  dispatch(
                    editar({
                      nome,
                      telefone,
                      email,
                      categorias,
                      id
                    })
                  )
                  setestaEditando(false)
                }}
              >
                <AiOutlineCheck />
                Salvar
              </BotaoSalvar>
              <BotaoCancelar onClick={cancelarEdicao}>
                <AiOutlineClose />
                Cancelar
              </BotaoCancelar>
            </>
          ) : (
            <>
              <Botao onClick={() => setestaEditando(true)}>
                <TiEdit /> Editar
              </Botao>
              <Botao onClick={() => dispatch(remover(id))}>
                <TiTrash /> Apagar
              </Botao>
            </>
          )}
          <FiltroBotao>{categorias}</FiltroBotao>
          {eFavorito ? (
            <>
              <FavoritadoBtn
                onClick={() => {
                  dispatch(removerFavorito(id))
                  seteFavorito(false)
                }}
              >
                <AiFillStar />
                Favoritado
              </FavoritadoBtn>
            </>
          ) : (
            <>
              <FavoritoBtn
                onClick={() => {
                  dispatch(adicionarFavorito(id))
                  seteFavorito(true)
                }}
              >
                Favoritar
              </FavoritoBtn>
            </>
          )}
        </BarraAcoes>
      </Card>
    </>
  )
}

export default Contatos
