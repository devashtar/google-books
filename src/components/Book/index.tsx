import React, { useEffect } from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react-lite'
import { globalStore } from '@store/global.store'

const imageURLTmp = process.env.PUBLIC_URL + '/images/book-tmp.jpeg'

export const Book: React.FC<{}> = observer(() => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const item = globalStore.activeItemBook!
  const imageURL = item.imageLinks?.thumbnail || imageURLTmp
  const category = item.categories || ['']
  const title = item.title || ''
  const authors = item.authors || ['']
  const description = item.description

  return (
    <Styled.Layout onClick={() => globalStore.setActiveBookItem(null)}>
      <Styled.Container>
        <Styled.WrapperImage>
          <Styled.Image src={imageURL} alt='title a book' />
        </Styled.WrapperImage>
        <Styled.WrapperContent>
          <Styled.Category>{category}</Styled.Category>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Authors>
            {authors.map((name, idx) => (idx !== 0 ? ', ' : '') + name)}
          </Styled.Authors>
          <Styled.Description>{description}</Styled.Description>
        </Styled.WrapperContent>
        <Styled.Close onClick={() => globalStore.setActiveBookItem(null)}>
          x
        </Styled.Close>
      </Styled.Container>
    </Styled.Layout>
  )
})
