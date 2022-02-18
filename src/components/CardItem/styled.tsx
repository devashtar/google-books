import styled from 'styled-components'

export const Container = styled.div`
  background-color: rgba(152, 205, 255, 0.3);
  margin: 0;
  padding: 3px;

  width: 100%;
  height: 100%;

  @media ${(props) => props.theme.breakpoint.mobileM} {
    padding: 10px;
  }

  &:hover {
    background-color: rgba(117, 184, 246, 0.3);
  }

  cursor: pointer;
`

export const WrapperImage = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  display: block;
  max-width: 150px;
  width: 100%;
  height: auto;

  @media ${(props) => props.theme.breakpoint.mobile} {
    height: 100%;
  }

  box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.2);
`

export const Content = styled.div`
  padding: 0px;
  width: 100%;
`

export const Category = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #777777;
`

export const Title = styled.h5`
  margin: 6px 0px 0px 0px;
  padding: 0;

  font-size: 15px;
  font-weight: 700;
  line-height: 18px;
  color: #333333;

  overflow: hidden;
`

export const Authors = styled.p`
  margin: 6px 0px 0px 0px;
  padding: 0;

  max-height: 54px;

  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  color: #575757;

  overflow: hidden;
`
