import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const SearchInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 4.4rem;
  margin: 0 auto;

  transition: all 0.2s;

  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall};
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray};
    border-radius: ${theme.border.maxradius};

    &:hover {
      box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
      border-color: ${theme.colors.gray};
    }
  `}

  > svg {
    ${({ theme }) => css`
      fill: ${theme.colors.gray};

      &:nth-child(3) {
        fill: ${darken(0.2, theme.colors.gray)};

        &:hover {
          cursor: pointer;
        }
      }
    `}
  }
`

export const SearchInput = styled.input`
  display: flex;
  flex: 100%;
  background-color: transparent;

  border: none;
  color: rgba(0, 0, 0, 0.87);
  outline: none;

  line-height: 34px;
  height: 34px;

  ${({ theme }) => css`
    margin-left: ${theme.spacings.small};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
