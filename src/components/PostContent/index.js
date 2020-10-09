import PropTypes from 'prop-types'
import * as S from './styles'

export default function PostContent({ content }) {
  return <S.PostContentWrapper dangerouslySetInnerHTML={{ __html: content }} />
}

PostContent.propTypes = {
  content: PropTypes.string.isRequired
}
