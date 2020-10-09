import styled, { css } from 'styled-components'

export const TagWrapper = styled.span`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxsmall} 0;
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.xxsmall};
    border-radius: ${theme.border.radius};
    background: ${theme.colors.white};
    padding: calc(${theme.spacings.xxsmall} / 3);
  `}
`
