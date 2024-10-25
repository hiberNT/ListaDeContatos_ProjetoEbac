import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h1`
  font-family: 'Lato', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: rgb(112, 161, 255);
  margin-bottom: 15px;
  margin-top: 12px;
  border-bottom: 1px solid #bdc3c7;
  padding-bottom: 10px;
`

export const Input = styled.input`
  background-color: rgb(206, 214, 224);
  padding: 4px;
  font-weight: bold;
  border-radius: 8px;
  width: 100%;
  border-color: gray;
  margin-bottom: 8px;
`
export default EstiloGlobal
