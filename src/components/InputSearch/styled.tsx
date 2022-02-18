import styled from 'styled-components'

const br = '4px'
const searchSVG = process.env.PUBLIC_URL + 'images/icons/search.svg'

export const Container = styled.form`
  position: relative;
  margin: 0;
  padding: 0;

  min-width: 200px;
  max-width: 380px;
  width: 100%;
  height: 40px;

  border-radius: ${br};
`

export const Input = styled.input`
  padding-left: 10px;

  width: 100%;
  height: 100%;

  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  color: #333333;

  border: 2px solid #888888;
  border-radius: ${br};

  &:hover {
    border: 2px solid #555555;
  }

  &:focus {
    border: 2px solid #3f89ff;
  }

  outline: none;
`

export const Btn = styled.button`
  position: absolute;
  top: calc(50% - 15px);
  right: 10px;

  background: transparent center no-repeat url(${searchSVG});
  background-size: 20px;

  width: 30px;
  height: 30px;

  border: 0;
  border-radius: none;

  cursor: pointer;
  outline: none;

  &:hover {
    background-size: 22px;
  }
`
