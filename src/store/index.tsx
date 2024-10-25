import { configureStore } from '@reduxjs/toolkit'
import contatosSlice from './reducers/contatos'
import filtroSlice from './reducers/filtros'

const store = configureStore({
  reducer: {
    contatos: contatosSlice,
    filtro: filtroSlice
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
