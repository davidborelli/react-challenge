import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ${({ theme }) => css`
    html {
      font-family: ${theme.font.family};
      font-size: 62.5%;
      scroll-behavior: smooth;
    }
    body {
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export default GlobalStyles
