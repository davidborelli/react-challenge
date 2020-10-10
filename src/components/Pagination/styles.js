import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => css`
    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.xxsmall}
    `}
  `}
`

export const Navigator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${(props) => props.active && 'pointer'};

  > svg {
    transform: ${(props) => props.previous && 'rotate(180deg)'};
    ${({ theme, active }) => css`
      fill: ${!active && theme.colors.gray};
    `}
  }

  &:nth-child(1) {
    ${({ theme }) => css`
      margin-right: ${theme.spacings.xxsmall};
    `}
  }

  &:nth-child(3) {
    ${({ theme }) => css`
      margin-left: ${theme.spacings.xxsmall};
    `}
  }
`

export const PageInformation = styled.div`
  span {
    ${({ theme }) => css`
      color: ${theme.colors.gray};
    `}
  }
`
