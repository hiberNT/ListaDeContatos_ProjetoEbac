import styled from 'styled-components'

export const Form = styled.form`
  max-width: 547px;
  width: 30%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;
`
export const Opcoes = styled.div`
  margin-bottom: 2px;
  margin-top: 16px;

  p {
    margin-bottom: 14px;
    font-size: 24px;
  }

  label {
    margin-right: 6px;
    font-size: 16px;
  }
`

export const Opcao = styled.div`
  display: ruby-text;
  margin-top: 8px;
`

export const BotaoCadastrar = styled.button`
  font-weight: bold;
  font-size: 14px;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 8px;
  background-color: rgb(46, 213, 115);

  &:hover {
    background-color: rgb(123, 237, 159);
  }
`
