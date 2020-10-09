import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

export default function Container({ children, isPost }) {
  return <S.ContainerWrapper isPost={isPost}>{children}</S.ContainerWrapper>
}

Container.defaultProps = {
  isPost: false
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  isPost: PropTypes.bool
}
