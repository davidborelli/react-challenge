import PropTypes from 'prop-types'

import * as S from './styles'

export default function Tag({ children }) {
  return <S.TagWrapper>{children}</S.TagWrapper>
}

Tag.propTypes = {
  children: PropTypes.string.isRequired
}
