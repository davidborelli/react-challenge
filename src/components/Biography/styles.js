import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const BiographyWrapper = styled.div`
  box-shadow: 0 5px 25px -5px #edeff4;

  ${({ theme }) => css`
    border: 1px solid ${lighten(0.1, theme.colors.gray)};
    border-radius: ${theme.border.radius};
    background: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const AuthorName = styled.a`
  text-decoration: none;
  border-bottom: 2px solid transparent;

  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.texts};
  `}
`

export const AuthorPhoto = styled.img`
  box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.1);

  width: 96px;
  height: 96px;
`

export const AuthorPhotoAndSocialMedia = styled.div`
  float: left;
  margin: 0 15px 15px 0;
`

export const SocialMedia = styled.div`
  text-align: center;
  svg {
    margin: 10px 10px 0 0;
    ${({ theme }) => css`
      fill: ${theme.colors.texts};
    `}
  }
`

export const AuthorInfo = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    line-height: ${theme.spacings.small};
    color: ${theme.colors.texts};
    margin-top: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.medium};
  `}

  a {
    text-decoration: none;
    ${({ theme }) => css`
      margin: ${theme.spacings.xsmall} 0;
      color: ${theme.colors.petroleum};
      border-bottom: 1px dotted ${theme.colors.petroleum};
    `}
  }

  img {
    width: 100%;
    height: 100%;

    ${({ theme }) => css`
      margin: ${theme.spacings.small} 0;
    `}
  }
`
