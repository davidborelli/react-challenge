import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const SearchResultItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
  `}

  ${media.lessThan('medium')`
    flex-direction: row;
  `}

  transition: transform 0.3s;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  }

  > a {
    cursor: pointer;
  }
`

export const SearchResultPhoto = styled.img`
  display: block;
  max-width: 100%;
  height: 16rem;

  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
  `}

  ${media.lessThan('medium')`
    height: 12rem;
    width: 16rem;
  `}

  ${media.lessThan('small')`
    height: 8rem;
    width: 12rem;
  `}

  cursor: pointer;
`

export const SearchResultIDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > div a {
    text-decoration: none;
  }

  ${({ theme }) => css`
    margin-left: ${theme.spacings.small};
  `}

  ${media.greaterThan('medium')`
    margin 0;
  `}
`

export const SearchResulTitle = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  ${({ theme }) => css`
    color: ${theme.colors.texts};
    font-size: ${theme.font.sizes.small};
  `}

  cursor: pointer;
`
