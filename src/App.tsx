import React from 'react'
import * as Styled from './App.styled'
import { observer } from 'mobx-react-lite'

import { Main } from '@containers/Main'
import { Button } from '@components/Button'
import { globalStore } from '@store/global.store'

export const App: React.FC<{}> = observer(() => {
  const signIn = () => {
    const keyAPI = String(prompt('Enter keyAPI(credentials application): ', ''))
    globalStore.setKeyApi(keyAPI)
    alert('вы установили ключ: ' + `"${keyAPI}"`)
  }

  const signOut = () => {
    globalStore.setKeyApi('')
    alert('keyAPI is cleaned')
  }

  return (
    <Styled.App>
      <Main />
      <Styled.WrapperBtn>
        <Button value='set keyAPI' onClick={signIn} />
        <Button value='reset keyAPI' onClick={signOut} />
      </Styled.WrapperBtn>
    </Styled.App>
  )
})
