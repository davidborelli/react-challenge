import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  transition: opacity 400ms ease-in;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99999;

  background: #2f2d48;
  opacity: 0.8;
  pointer-events: none;
  cursor: none;

  > span {
    font-size: 3rem;
    color: #fff;
    margin-bottom: 3rem;
  }

  > svg {
    animation: ${spin} 1s linear infinite;
  }
`
