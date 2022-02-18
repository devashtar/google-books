import React from 'react'
import * as Styled from './styled'

import { Header } from '@containers/Header'
import { Content } from '@containers/Content'

export const Main: React.FC<{}> = () => {
  return (
    <Styled.Main>
      <Header />
      <Content />
    </Styled.Main>
  )
}
