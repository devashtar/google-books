import React from 'react'
import * as Styled from './App.styled'

import { Main } from '@containers/Main'

export const App: React.FC<{}> = () => {
  return (
    <Styled.App>
      <Main />
    </Styled.App>
  )
}
