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

  transition: height 0.4s ease-in;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #2f2d48;
  opacity: 0.7;

  > span {
    font-size: 3rem;
    color: #fff;
    margin-bottom: 3rem;
  }

  > svg {
    animation: ${spin} 1s linear infinite;
  }
`
