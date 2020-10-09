import styled, { css } from 'styled-components'

export const PostHeaderWrapper = styled.header`
  ${({ theme }) => css`
    color: ${theme.colors.texts};
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.petroleum};
    margin: ${theme.spacings.xsmall} 0;
  `}
`

export const PostHeaderSubtitle = styled.blockquote`
  display: block;

  ${({ theme }) => css`
    border-color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.small};
    padding-left: ${theme.spacings.small};
    border-left: 2px solid ${theme.colors.primary};
    margin: ${theme.spacings.xsmall} 0;
    color: ${theme.colors.texts};
    line-height: ${theme.font.sizes.medium};
  `}
`

export const WrittenBy = styled.span`
  display: flex;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
  `}
`

export const AuthorName = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`

export const PostDate = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xxsmall};
  `}
`

export const Category = styled.div`
  a {
    text-decoration: none;
  }
`

export const PostImage = styled.img`
  width: 100%;
`
