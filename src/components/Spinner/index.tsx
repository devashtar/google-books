import React from 'react'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { TailSpin } from 'react-loader-spinner'
import * as Styled from './styled'

export const Spinner: React.FC<{}> = () => {
  return (
    <Styled.Container>
      <TailSpin height='40' width='40' color='#5a94ff' ariaLabel='loading' />
    </Styled.Container>
  )
}
