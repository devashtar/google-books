import styled from 'styled-components'

export const Container = styled.div`
  margin: 0;
  padding: 0px;
  width: 100%;

  @media ${(props) => props.theme.breakpoint.tablet} {
    padding: 0px 10px;
  }
`
