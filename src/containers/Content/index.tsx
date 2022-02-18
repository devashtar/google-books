import React from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react-lite'
import { globalStore } from '@store/global.store'
import { IBook } from '@types'

import { Container } from '@components/Container'
import { Spinner } from '@components/Spinner'
import { Result } from '@components/Result'
import { CardItem } from '@components/CardItem'
import { More } from '@components/More'
import { Book } from '@components/Book'

interface IData {
  volumeInfo: IBook
}

export const Content: React.FC<{}> = observer(() => {
  return (
    <Styled.Content>
      <Container>
        {globalStore.activeItemBook !== null && <Book />}
        {globalStore.totalItems !== 0 && <Result />}
        {globalStore.books.length !== 0 && (
          <Styled.List>
            {globalStore.books.map(({ volumeInfo }: IData, idx) => (
              <CardItem key={idx} item={volumeInfo} />
            ))}
          </Styled.List>
        )}
        {globalStore.isLoading && <Spinner />}
        {!globalStore.isLoading &&
          globalStore.totalItems > globalStore.startIndex + 1 && <More />}
      </Container>
    </Styled.Content>
  )
})
