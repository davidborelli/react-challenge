import * as S from './styles'
import PropTypes from 'prop-types'

export default function Button({ children, href, wide, onClick, id }) {
  return (
    <S.ButtonWrapper id={id} href={href} wide={wide} onClick={onClick}>
      {children}
    </S.ButtonWrapper>
  )
}

Button.defaultProps = {
  href: null,
  wide: false,
  onClick: () => {}
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  href: PropTypes.string,
  wide: PropTypes.bool,
  onClick: PropTypes.func,
  id: PropTypes.string
}
