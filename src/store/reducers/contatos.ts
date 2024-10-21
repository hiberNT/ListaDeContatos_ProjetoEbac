import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contato from '../../models/Costructor_Tarefas'

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: [
    new Contato('Teste', '99999999', 'Teste@gmail.com', 'Familia', 1),
    new Contato('Teste2', '999999', 'Teste@gmail.com', 'Familia', 2)
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((c) => c.id !== action.payload)
    }
  }
})

export const { remover } = contatosSlice.actions
export default contatosSlice.reducer
