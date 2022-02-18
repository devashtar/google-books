import React, { useState } from 'react'
import axios from 'axios'
import * as Styled from './styled'
import { observer } from 'mobx-react-lite'
import { globalStore } from '@store/global.store'

const url = process.env.REACT_APP_GOOGLE_BOOKS_API_URL || ''

export const InputSearch: React.FC<{}> = observer(() => {
  const [qValue, setQValue] = useState('')

  const Search = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (qValue.trim() === '') return setQValue('')

    globalStore.setLoading(true)

    try {
      await axios
        .get(url, {
          params: {
            q: qValue,
            startIndex: globalStore.startIndex,
            maxResults: globalStore.maxResults,
            subject: globalStore.filters.categories.value,
            orderBy: globalStore.filters.sort.value,
            key: globalStore.keyAPI
          }
        })
        .then((res) => {
          globalStore.setBooks(res.data.items)
          globalStore.setTotalItems(res.data.totalItems)
          globalStore.setQueryValue(qValue)
        })
        .catch((err) => console.log(err))
    } catch (err) {
      console.error(err)
    } finally {
      globalStore.setLoading(false)
      setQValue('')
    }
  }

  return (
    <Styled.Container onSubmit={(e) => Search(e)}>
      <Styled.Input
        type='text'
        onChange={(e) => setQValue(e.target.value)}
        value={qValue}
        title={`input book's name`}
      />
      <Styled.Btn type='submit' />
    </Styled.Container>
  )
})
