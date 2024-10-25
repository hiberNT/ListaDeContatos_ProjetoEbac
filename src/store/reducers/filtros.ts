import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type CategoriaState = {
  termo?: string
  categorias:
    | 'Comum'
    | 'Favoritado'
    | 'Familia'
    | 'Trabalho'
    | 'Bloqueado'
    | 'Todos'
}

const initialState: CategoriaState = {
  termo: '',
  categorias: 'Todos'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    },
    alterarFiltros: (state, action: PayloadAction<CategoriaState>) => {
      state.categorias = action.payload.categorias
    }
  }
})

export const { alterarTermo, alterarFiltros } = filtroSlice.actions

export default filtroSlice.reducer
