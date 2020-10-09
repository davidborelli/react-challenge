import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const ContainerWrapper = styled.div`
  ${({ theme, isPost }) => css`
    max-width: ${isPost ? theme.container.post : theme.container.maxWidth};
    padding: ${theme.spacings.small} calc(${theme.spacings.medium} / 2);
    margin: 0 auto;

    ${media.greaterThan('medium')`
      padding: 0 calc(${theme.spacings.small} / 2);
    `}
  `}
`
