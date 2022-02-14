import React from 'react'
import * as Styled from './styled'

import { Container } from '@components/Container'
import { Title } from '@components/Title'
import { Nav } from '@components/Nav'

export const Header: React.FC<{}> = () => {
  return (
    <Styled.Header>
      <Container>
        <Title />
        <Nav></Nav>
      </Container>
    </Styled.Header>
  )
}
