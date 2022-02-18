import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const Select = styled.select`
  background-color: #fefefe;
  padding-left: 6px;

  height: 40px;
  min-width: 120px;

  font-size: 15px;
  font-weight: 600;
  line-height: 18px;
  color: #333333;

  border: 2px solid #888888;
  border-radius: 4px;

  &:hover {
    border: 2px solid #555555;
  }

  &:active {
    border: 2px solid #3a96ff;
  }

  cursor: pointer;

  outline: none;
`

export const Label = styled.div`
  position: absolute;
  top: -22px;
  left: 0px;

  text-indent: 6px;
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
  color: #d4d4d4;
`
