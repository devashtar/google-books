import styled from 'styled-components'

const prefix = process.env.PUBLIC_URL

export const App = styled.div`
  position: relative;

  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    center / cover no-repeat url(${prefix + 'images/bg-image.jpg'});

  width: 100%;
  min-height: 100vh;
`
