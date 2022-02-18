import React from 'react'
import * as Styled from './styled'
import { globalStore } from '@store/global.store'

interface IProps {
  filterName: string
  value: string
  options: Array<string>
  label?: string
}

export const Select: React.FC<IProps> = ({
  filterName,
  value,
  options,
  label
}) => {
  const onClick = (name: string) => {
    globalStore.updateFilter(filterName, name)
  }

  const test = (e: any) => {
    console.log(e)
  }

  return (
    <Styled.Container>
      <Styled.Select
        defaultValue={value}
        onChange={(e) => onClick(e.target.value)}
      >
        {options.map((name, idx) => (
          <option key={idx} value={name}>
            {name}
          </option>
        ))}
      </Styled.Select>
      <Styled.Label>{label}</Styled.Label>
    </Styled.Container>
  )
}
