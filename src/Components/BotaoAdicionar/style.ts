import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Circulo = styled(Link)`
  display: flex;
  height: 64px;
  width: 64px;
  background-color: gray;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  text-decoration: none;
`
