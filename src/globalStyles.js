import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, 
  *::before, 
  *::after {

      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Karla', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  :root {
  --color-primary-dark: #F45B49;
  --color-primary-light: #F7AA9A;
  --color-secondary: #F3A13B;
  --color-text-dark: #292929;
  --color-text-light: #49574E;
  --color-light: #FAF6EB
}

`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (min-width: 768px) {
    padding: 0 50px;
  }
`;

export const MainHeading = styled.h1`
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  margin-bottom: 2rem;
  color: ${({ inverse }) => (inverse ? "#F45B49" : "#fff")};
  width: 100%;
  letter-spacing: 0.1rem;
  text-align: center;
`;

export const Heading = styled.h2`
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  margin: ${({ margin }) => (margin ? margin : "")};
  color: ${({ inverse }) => (inverse ? "#F45B49" : "#fff")};
  letter-spacing: 0.1rem;
  line-height: 1.06;
  text-align: center;
  width: ${({ width }) => (width ? width : "100%")}; ;
`;

export const TextWrapper = styled.span`
  color: ${({ color }) => (color ? color : "")};
  font-size: ${({ size }) => (size ? size : "")};
  font-weight: ${({ weight }) => (weight ? weight : "")};
  letter-spacing: ${({ spacing }) => (spacing ? spacing : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
`;

export const Section = styled.section`
  padding: ${({ smPadding }) => (smPadding ? smPadding : "70px 0")};
  margin: ${({ margin }) => (margin ? margin : "")};
  background: ${({ inverse }) => (inverse ? "white" : "#F45B49")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  @media screen and (min-width: 768px) {
    padding: ${({ padding }) => (padding ? padding : "140px 0")};
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 50px;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
  flex-wrap: ${({ wrap }) => (wrap ? wrap : "")};

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    row-gap: 0;
    align-items: center;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  gap: ${({ gap }) => (gap ? gap : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  position: ${({ position }) => (position ? position : "")};
  width: ${({ width }) => (width ? width : "auto")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "auto")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
`;

export const Button = styled.button`
  border-radius: 5px;
  background: none;
  white-space: nowrap;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  outline: none;
  border: 2px solid #fff;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:before {
    background: #fff;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:hover:before {
    height: 500%;
  }
  &:hover {
    color: black;
  }
`;

export default GlobalStyles;
