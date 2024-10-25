import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCard from '../../Components/Cards'
import { Input } from '../../styles/index'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtros'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <>
      <S.Aside>
        <div>
          {mostrarFiltros ? (
            <>
              <Input
                type="text"
                placeholder="Pesquisar"
                value={termo}
                onChange={(evento) =>
                  dispatch(alterarTermo(evento.target.value))
                }
              />
              <S.Filtros>
                <FiltroCard categorias="Todos" legenda={'Todos'} />
                <FiltroCard categorias="Comum" legenda={'Comum'} />
                <FiltroCard categorias="Familia" legenda={'Familia'} />
                <FiltroCard categorias="Trabalho" legenda={'Trabalho'} />
                <FiltroCard categorias="Bloqueado" legenda={'Bloqueado'} />
              </S.Filtros>
            </>
          ) : (
            <S.BotaoVoltar onClick={() => navigate('/')} type="button">
              Voltar aos Contatos
            </S.BotaoVoltar>
          )}
        </div>
      </S.Aside>
    </>
  )
}

export default BarraLateral
