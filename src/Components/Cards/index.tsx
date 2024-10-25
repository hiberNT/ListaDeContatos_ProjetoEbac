import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alterarFiltros } from '../../store/reducers/filtros'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  categorias: 'Comum' | 'Familia' | 'Trabalho' | 'Bloqueado' | 'Todos'
}

const FiltroCard = ({ legenda, categorias }: Props) => {
  const dispatch = useDispatch()
  const { filtro, contatos } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCategoria = filtro.categorias === categorias

    return mesmoCategoria
  }

  const contarContatos = () => {
    if (categorias === 'Todos') return contatos.itens.length

    if (categorias === 'Comum') {
      return contatos.itens.filter((item) => item.categorias === 'Comum').length
    }

    if (categorias === 'Familia') {
      return contatos.itens.filter((item) => item.categorias === 'Familia')
        .length
    }

    if (categorias === 'Trabalho') {
      return contatos.itens.filter((item) => item.categorias === 'Trabalho')
        .length
    }

    if (categorias === 'Bloqueado') {
      return contatos.itens.filter((item) => item.categorias === 'Bloqueado')
        .length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltros({
        categorias
      })
    )
  }

  const contador = contarContatos()
  const ativo = verificaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard
