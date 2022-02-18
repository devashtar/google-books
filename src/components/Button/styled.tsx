import styled from 'styled-components'

export const Button = styled.button`
  background-color: transparent;
  padding: 6px 18px;

  font-size: 15px;
  font-weight: 500;
  line-break: 18px;
  color: #e7e7e7;

  border: 1px solid #e7e7e7;
  border-radius: 4px;

  box-shadow: 0px 0px 7px 1px rgba(255, 255, 255, 0.5);

  cursor: pointer;

  outline: none;

  &:hover {
    border: 1px solid #b0caf3;
    box-shadow: none;
    color: #bcd1f3;
  }
`
