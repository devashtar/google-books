import styled from 'styled-components'

export const Nav = styled.nav`
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);

  margin: 20px auto 0px;
  padding: 20px 10px;

  max-width: 500px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
`

export const WrapperSelect = styled.div`
  margin-top: 10px;

  max-width: 380px;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  & > * {
    margin-top: 30px;
  }

  & > *:first-child {
    margin-right: 10px;
  }
`
