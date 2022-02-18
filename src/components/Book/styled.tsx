import styled from 'styled-components'

export const Layout = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 100px;
  left: 0;
  top: 0;

  width: 100%;
  height: 100vh;

  z-index: 1000;
  overflow: auto;
`

export const Container = styled.div`
  margin: 0 auto;
  position: relative;
  background-color: #fefefe;
  padding: 20px 10px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-gap: 10px;

  border-radius: 8px;

  max-width: 400px;
  width: 100%;

  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.3);

  @media ${(props) => props.theme.breakpoint.tablet} {
    max-width: 700px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 14px;
  }

  @media ${(props) => props.theme.breakpoint.laptop} {
    max-width: 900px;
    padding: 20px;
  }
`

export const WrapperImage = styled.div`
  background-color: #ececec;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
`

export const Image = styled.img`
  display: block;
  width: 80%;

  max-height: 300px;

  @media ${(props) => props.theme.breakpoint.tablet} {
    width: auto;
    height: 70%;
  }

  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.3);
`

export const WrapperContent = styled.div`
  padding: 10px;
`

export const Category = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  color: #777777;
`

export const Title = styled.h5`
  margin: 10px 0px;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  color: #333333;
`

export const Authors = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  color: #575757;
`

export const Description = styled.p`
  margin-top: 30px;
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  color: #444444;
`

export const Close = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;
  background-color: #333333;

  width: 26px;
  height: 26px;

  border: none;
  border-radius: 50%;

  font-size: 16px;
  line-height: 16px;
  color: #699bf6;

  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);

  cursor: pointer;
  outline: none;

  &:hover {
    color: #fefefe;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  }
`
