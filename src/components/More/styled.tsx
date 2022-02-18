import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 20px;
  padding-bottom: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Btn = styled.button`
  background-color: transparent;

  border: none;
  border-radius: none;

  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  color: #ef760b;
  text-decoration: underline;

  &:hover {
    color: #e48634;
    text-decoration: underline;
  }

  cursor: pointer;
  outline: none;
`
