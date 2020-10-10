import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    max-width: ${theme.container.medium};
    padding: 0 calc(${theme.spacings.xlarge} / 2);
    margin: ${theme.spacings.medium} auto;

    ${media.lessThan('small')`
      padding: ${theme.spacings.xxsmall};
      margin: ${theme.spacings.xxsmall} auto;
    `}
  `}

  width: 100%;
`

export const Logo = styled.img`
  width: 400px;

  ${media.lessThan('small')`
    width: 250px;
  `}

  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
  `}
`

export const SearchActions = styled.div`
  display: flex;
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
  `}
`
