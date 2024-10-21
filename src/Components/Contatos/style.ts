import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

/*export const Categorias = styled.div`
  border-bottom: 1px solid red;
  margin-top: 8px;

  span {
    margin-left: 38px;
  }
`*/

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`
export const ContainerInputs = styled.div`
  display: flex;
  gap: 15px;
  justify-content: space-between;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:focus-within {
    border-color: #4a90e2;
  }

  svg {
    margin-right: 8px;
    color: #555;
  }

  input {
    border: none;
    outline: none;
    background: transparent;
    width: 100%;
    font-size: 16px;
    color: #333;
  }

  input::placeholder {
    color: #aaa;
    font-style: italic;
  }
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cizna};
  border-radius: 8px;
  margin-right: 8px;
  align-items: center;

  svg {
    font-size: 16px;
    vertical-align: bottom;
    margin-right: 2px;
  }
`
export const BotaoCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const FiltroBotao = styled.span`
  color: #fff;
  background-color: ${variaveis.cizna};
  float: right;
  margin-right: 16px;
  margin-top: 2px;
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 12px;
  color: #fff;
`
export const FavoritoBtn = styled(Botao)`
  background-color: ${variaveis.cizna};
  float: right;
  margin-top: 2px;
`
export const FavoritadoBtn = styled(Botao)`
  background-color: ${variaveis.Dourado};
  float: right;
  margin-top: 2px;
  color: #000;
`
