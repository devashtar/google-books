import React from 'react'
import * as Styled from './styled'

import { Header } from '@containers/Header'

export const Main: React.FC<{}> = () => {
  return (
    <Styled.Main>
      <Header />
    </Styled.Main>
  )
}
