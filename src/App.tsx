import EstiloGlobal, { Container } from './styles'
import ListaDeContatos from './Containers/ListaDeContatos'
import BarraLateral from './Containers/BarraLateral'
import { Provider } from 'react-redux'

import store from './store'
function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App
