import React from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react-lite'
import { globalStore } from '@store/global.store'

import { InputSearch } from '@components/InputSearch'
import { Select } from '@components/Select'

export const Nav: React.FC<{}> = observer(() => {
  return (
    <Styled.Nav>
      <InputSearch />
      <Styled.WrapperSelect>
        {Object.entries(globalStore.filters).map(([name, obj], idx) => {
          return (
            <Select
              key={idx}
              filterName={name}
              value={obj.value}
              label={obj.label}
              options={obj.options}
            />
          )
        })}
      </Styled.WrapperSelect>
    </Styled.Nav>
  )
})
