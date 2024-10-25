import styled from 'styled-components'

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 8px;
  background-color: rgb(47, 53, 66);
`

export const Aside = styled.aside`
  padding: 16px;
  background-color: #eee;
  height: 100vh;
`

export const Filtros = styled.div`
  display: block;
  margin-top: 16px;
  margin-botton: 8px;
`

export const BotaoVoltar = styled.button`
  padding: 8px;
  width: 100%;
  border-radius: 16px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  background-color: rgb(206, 214, 224);

  &:hover {
    background-color: rgb(71 85 102);
  }
`
