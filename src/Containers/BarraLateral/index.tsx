import FiltroCard from '../../Components/Cards'
import * as S from './styles'

const BarraLateral = () => {
  return (
    <>
      <S.Aside>
        <div>
          <S.Input type="text" placeholder="Pesquisar" />
          <S.Filtros>
            <FiltroCard legenda={'Todos'} contador={1} />
            <FiltroCard legenda={'Favoritos'} contador={1} />
            <FiltroCard legenda={'Comum'} contador={2} />
            <FiltroCard legenda={'Familia'} contador={3} />
            <FiltroCard legenda={'Trabalho'} contador={4} />
            <FiltroCard legenda={'Bloqueado'} contador={5} ativo />
          </S.Filtros>
        </div>
      </S.Aside>
    </>
  )
}

export default BarraLateral
