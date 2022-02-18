import styled from 'styled-components'

export const Content = styled.main`
  position: relative;
  flex: 1;

  margin: 40px 0px 0px 0px;
  padding: 0px 0px 20px 0px;

  background-color: #fefefe;
  height: 100%;
`

export const List = styled.ul`
  list-style-type: none;
  margin: 20px 0px 0px 0px;
  padding: 0px 0px 30px 0px;

  width: 100%;
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(320px, 360px));

  @media ${(props) => props.theme.breakpoint.mobile} {
    grid-template-columns: repeat(2, minmax(156px, 1fr));
    grid-gap: 4px;
  }

  @media ${(props) => props.theme.breakpoint.mobileM} {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    grid-gap: 10px;
  }

  @media ${(props) => props.theme.breakpoint.tabletL} {
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
    grid-gap: 16px;
  }

  @media ${(props) => props.theme.breakpoint.tabletL} {
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
    grid-gap: 16px;
  }

  @media ${(props) => props.theme.breakpoint.laptop} {
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    grid-gap: 24px;
  }

  @media ${(props) => props.theme.breakpoint.desktop} {
    grid-template-columns: repeat(auto-fill, minmax(204px, 1fr));
    grid-gap: 30px;
  }

  justify-content: center;

  & > * {
    justify-self: center;
  }
`
