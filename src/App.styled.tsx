import styled from 'styled-components'

const prefix = process.env.PUBLIC_URL

export const App = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    50% -200px / 100% 100vh no-repeat url(${prefix + 'images/bg-image.jpg'});

  width: 100%;
  min-height: 100vh;
`

export const WrapperBtn = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;

  right: 10px;
  top: 10px;

  border-radius: 6px;

  & > button:first-child {
    margin-right: 20px;
  }
`
