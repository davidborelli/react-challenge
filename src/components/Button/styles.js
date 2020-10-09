import styled, { css } from 'styled-components'
import { darken, lighten } from 'polished'

export const ButtonWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  line-height: 27px;
  height: 36px;

  text-align: center;
  cursor: pointer;
  text-decoration: none;

  ${({ theme, wide }) => css`
    background-color: ${lighten(0.1, theme.colors.gray)};
    border: 1px solid ${lighten(0.1, theme.colors.gray)};
    border-radius: ${theme.border.radius};
    color: ${darken(0.2, theme.colors.gray)};

    font-size: ${theme.font.sizes.xxsmall};
    margin: ${theme.spacings.xsmall} ${theme.spacings.xxsmall};

    width: ${wide && theme.spacings.large};
    min-width: ${theme.spacings.large};
    padding: 0 ${theme.spacings.xsmall};

    &:hover {
      border-color: ${theme.colors.gray};
    }
  `}
`
