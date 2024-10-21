import styled from 'styled-components'

import { Props } from '.'

type PropsSemLeC = Omit<Props, 'contador' | 'legenda'>

export const Card = styled.div<PropsSemLeC>`
  padding: 4px;
  border: 1px solid ${(props) => (props.ativo ? '#000' : '#a1a1a1')};
  background-color: ${(props) =>
    props.ativo ? 'rgb(47, 53, 66)' : 'rgb(87, 96, 111)'};
  color: rgb(112, 161, 255);
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 8px;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
`

export const Label = styled.span`
  font-size: 18px;
  margin-left: 2px;
  margin-top: 5px;
`
