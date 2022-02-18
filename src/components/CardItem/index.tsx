import React from 'react'
import * as Styled from './styled'
import { globalStore } from '@store/global.store'
import { IBook } from '@types'

interface IProps {
  item: IBook
}

const imageURLTmp = process.env.PUBLIC_URL + '/images/book-tmp.jpeg'

export const CardItem: React.FC<IProps> = ({ item }) => {
  const imageURL = item.imageLinks?.thumbnail || imageURLTmp
  const categories = item.categories || ['']
  const title = item.title || ''
  const authors = item.authors || ['']

  return (
    <Styled.Container onClick={() => globalStore.setActiveBookItem(item)}>
      <Styled.WrapperImage>
        <Styled.Image src={imageURL} alt='title a book' />
      </Styled.WrapperImage>
      <Styled.Content>
        <Styled.Category>{categories[0]}</Styled.Category>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Authors>
          {authors.map((name, idx) => (idx !== 0 ? ', ' : '') + name)}
        </Styled.Authors>
      </Styled.Content>
    </Styled.Container>
  )
}
