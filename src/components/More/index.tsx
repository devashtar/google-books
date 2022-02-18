import React from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react-lite'
import { globalStore } from '@store/global.store'
import axios from 'axios'

const url = process.env.REACT_APP_GOOGLE_BOOKS_API_URL || ''

export const More: React.FC<{}> = observer(() => {
  const getMoreBooks = async () => {
    globalStore.setLoading(true)

    try {
      await axios
        .get(url, {
          params: {
            q: globalStore.queryValue,
            startIndex: globalStore.startIndex,
            maxResults: globalStore.maxResults,
            subject: globalStore.filters.categories.value,
            orderBy: globalStore.filters.sort.value,
            key: globalStore.keyAPI
          }
        })
        .then((res) => {
          globalStore.addBooks(res.data.items)
        })
        .catch((err) => console.log(err))
    } catch (err) {
      console.log(err)
    } finally {
      globalStore.setLoading(false)
    }
  }

  return (
    <Styled.Container>
      <Styled.Btn onClick={() => getMoreBooks()}>more</Styled.Btn>
    </Styled.Container>
  )
})
