import styled, { css } from 'styled-components'

export const PostContentWrapper = styled.div`
  display: block;

  ${({ theme }) => css`
    color: ${theme.colors.texts};
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.large};
  `}

  img {
    width: 100%;
    height: 100%;

    ${({ theme }) => css`
      margin: ${theme.spacings.small} 0;
    `}
  }

  p {
    ${({ theme }) => css`
      margin: ${theme.spacings.xsmall} 0;
    `}
  }

  a {
    text-decoration: none;
    ${({ theme }) => css`
      margin: ${theme.spacings.xsmall} 0;
      color: ${theme.colors.petroleum};
      border-bottom: 1px dotted ${theme.colors.petroleum};
    `}
  }

  ul {
    ${({ theme }) => css`
      margin: ${theme.spacings.small} 0;
      padding-left: ${theme.spacings.medium};
    `}
  }

  li {
    ${({ theme }) => css`
      margin: ${theme.spacings.xxsmall} 0;
      line-height: ${theme.spacings.small};
    `}
  }

  h4 {
    ${({ theme }) => css`
      margin: ${theme.spacings.xxsmall} 0;
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.bold};
    `}
  }
`
