import SearchInput from 'components/SearchInput'
import Button from 'components/Button'
import PropTypes from 'prop-types'

import * as S from './styles'

export default function SectionSearch({
  fnSearchText,
  searchTextValue,
  fnHandleSearch
}) {
  return (
    <S.Container>
      <S.Logo src="/img/logo.svg" alt="Logo Mejor con Salud" />
      <SearchInput
        fnSearchText={fnSearchText}
        searchTextValue={searchTextValue}
      />
      <S.SearchActions>
        <Button id="btnSearchAll" onClick={() => fnHandleSearch(false)}>
          Pesquisar todos
        </Button>
        <Button onClick={() => fnHandleSearch(true)}>Mais relevantes</Button>
      </S.SearchActions>
    </S.Container>
  )
}

SectionSearch.propTypes = {
  fnSearchText: PropTypes.func.isRequired,
  fnHandleSearch: PropTypes.func.isRequired,
  searchTextValue: PropTypes.string
}
