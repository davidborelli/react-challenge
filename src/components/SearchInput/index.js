import { Search } from '@styled-icons/evaicons-solid/Search'
import { Close } from '@styled-icons/evaicons-solid/Close'
import PropTypes from 'prop-types'

import * as S from './styles'

export default function SearchInput({ fnSearchText, searchTextValue }) {
  return (
    <S.SearchInputWrapper>
      <Search size={20} />
      <S.SearchInput
        value={searchTextValue}
        onChange={(e) => fnSearchText(e.target.value)}
      />
      {searchTextValue && <Close size={25} onClick={() => fnSearchText('')} />}
    </S.SearchInputWrapper>
  )
}

SearchInput.propTypes = {
  fnSearchText: PropTypes.func.isRequired,
  searchTextValue: PropTypes.string
}
