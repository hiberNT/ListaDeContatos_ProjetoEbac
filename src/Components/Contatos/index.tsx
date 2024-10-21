import { useState } from 'react'
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
import { TiEdit, TiTrash, TiPhoneOutline, TiMail } from 'react-icons/ti'

type Props = {
  nome: string
  telefone: string
  email: string
  categoria: string
}
const Contatos = ({ nome, telefone, email, categoria }: Props) => {
  const [estaEditando, setestaEditando] = useState(false)
  const [eFavorito, seteFavorito] = useState(false)

  return (
    <>
      <Card>
        <ContainerInputs>
          <InputContainer>
            <AiFillSignature />
            <input type="name" placeholder="Seu nome completo" value={nome} />
          </InputContainer>
          <InputContainer>
            <TiPhoneOutline />
            <input type="tel" placeholder="Telefone" value={telefone} />
          </InputContainer>
          <InputContainer>
            <TiMail />
            <input type="email" placeholder="Email" value={email} />
          </InputContainer>
        </ContainerInputs>
        <BarraAcoes>
          {estaEditando ? (
            <>
              <BotaoSalvar>
                <AiOutlineCheck />
                Salvar
              </BotaoSalvar>
              <BotaoCancelar onClick={() => setestaEditando(false)}>
                <AiOutlineClose />
                Cancelar
              </BotaoCancelar>
            </>
          ) : (
            <>
              <Botao onClick={() => setestaEditando(true)}>
                <TiEdit /> Editar
              </Botao>
              <Botao>
                <TiTrash /> Apagar
              </Botao>
            </>
          )}
          <FiltroBotao>{categoria}</FiltroBotao>
          {eFavorito ? (
            <>
              <FavoritadoBtn onClick={() => seteFavorito(false)}>
                <AiFillStar />
                Favoritado
              </FavoritadoBtn>
            </>
          ) : (
            <>
              <FavoritoBtn onClick={() => seteFavorito(true)}>
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
