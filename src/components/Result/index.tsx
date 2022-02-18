import React from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react-lite'
import { globalStore } from '@store/global.store'

export const Result: React.FC<{}> = observer(() => {
  return (
    <Styled.Text>
      {`${globalStore.totalItems} result${
        globalStore.totalItems > 1 ? 's' : ''
      } of search by query: "${globalStore.queryValue}"`}
    </Styled.Text>
  )
})
