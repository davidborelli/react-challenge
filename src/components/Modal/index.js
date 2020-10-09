import { useEffect } from 'react'
import { LoaderAlt } from '@styled-icons/boxicons-regular/LoaderAlt'
import * as S from './styles'

function Modal() {
  useEffect(() => {
    disableScroll('hidden')

    return () => disableScroll('scroll')
  }, [])

  const disableScroll = (option) => {
    const body = document.getElementsByTagName('body')[0]
    body.style.overflow = option
  }

  return (
    <S.ModalWrapper>
      <span>Carregando...</span>
      <LoaderAlt size={50} fill="#fff" />
    </S.ModalWrapper>
  )
}

export default Modal
