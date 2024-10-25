import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contato from '../../models/Costructor_Tarefas'

type ContatosState = {
  itens: Contato[]
  Favoritado: number[]
  mostrarFavoritos: boolean
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'JOAO',
      telefone: '8994494949',
      email: 'JOAO@gmail.com',
      categorias: 'Familia'
    },
    {
      id: 2,
      nome: 'Ana',
      telefone: '959595595',
      email: 'ana@gmail.com',
      categorias: 'comum'
    },
    {
      id: 3,
      nome: 'Maria',
      telefone: '8994494949',
      email: 'duda@gmail.com',
      categorias: 'Familia'
    },
    {
      id: 4,
      nome: 'Loja',
      telefone: '86868686',
      email: 'LOJA@gmail.com',
      categorias: 'Bloqueado'
    },
    {
      id: 5,
      nome: 'dENIS',
      telefone: '8994494949',
      email: 'denis@gmail.com',
      categorias: 'Comum'
    },
    {
      id: 6,
      nome: 'jorge',
      telefone: '8994494977849',
      email: 'jorge@gmail.com',
      categorias: 'Trabalho'
    }
  ],
  Favoritado: [],
  mostrarFavoritos: false
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState: initialState,
  reducers: {
    adicionarFavorito: (state, action) => {
      state.Favoritado.push(action.payload)
    },

    removerFavorito: (state, action) => {
      state.Favoritado = state.Favoritado.filter((id) => id !== action.payload)
    },

    alternarMostrarFavoritos: (state) => {
      state.mostrarFavoritos = !state.mostrarFavoritos
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [...state.itens.filter((c) => c.id !== action.payload)]
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (e) => e.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const nomeJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLocaleLowerCase() ===
          action.payload.nome.toLocaleLowerCase()
      )

      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.telefone.toLocaleLowerCase() ===
          action.payload.telefone.toLocaleLowerCase()
      )

      if (nomeJaExiste) {
        alert('Já existe um contato com esse nome')
      } else if (contatoJaExiste) {
        alert('Já existe um contato com esse número')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const novoContato = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(novoContato)
      }
    }
  }
})

export const {
  remover,
  editar,
  adicionarFavorito,
  removerFavorito,
  alternarMostrarFavoritos,
  cadastrar
} = contatosSlice.actions
export default contatosSlice.reducer
