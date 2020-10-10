import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const SectionSearchResultWrapper = styled.section`
  ${({ theme }) => css`
    grid-gap: ${theme.spacings.xsmall};
  `}
`

export const SectionSearchResultData = styled.h1`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xsmall};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.texts};
    font-weight: ${theme.font.bold};

    > div.result span {
      color: ${theme.colors.primary};
    }

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.xsmall};
    `}
  `}
`

export const SectionSearchTitle = styled.span`
  display: block;
  text-align: center;
  width: 100%;
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.texts};
    font-weight: ${theme.font.bold};
  `}

  ${media.lessThan('small')`
    ${({ theme }) => css`
      margin-bottom: ${theme.spacings.xsmall};
    `}
  `}
`

export const SearchResultContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ${({ theme }) => css`
    grid-gap: ${theme.spacings.xsmall};

    ${media.lessThan('medium')`
      grid-gap: ${theme.spacings.xxsmall};
    `}
  `}

  ${media.lessThan('medium')`
    grid-template-columns: 1fr;
  `}
`
