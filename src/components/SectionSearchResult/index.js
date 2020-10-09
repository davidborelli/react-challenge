import PropTypes from 'prop-types'

import SearchResultItem from 'components/SearchResultItem'
import Container from 'components/Container'
import Pagination from 'components/Pagination'

import * as S from './styles'

export default function SectionSearchResult({
  searchResult,
  lastSearch,
  fnPagination
}) {
  return (
    <Container>
      <S.SectionSearchResultWrapper>
        <S.SectionSearchTitle>Todos los resultados</S.SectionSearchTitle>
        {searchResult?.size > 0 ? (
          <S.SectionSearchResultData>
            <div className="result">
              {searchResult?.size} resultados {lastSearch && 'para'}{' '}
              <span>{lastSearch}</span>
            </div>

            <Pagination
              pagesNumber={searchResult?.pages}
              fnPagination={fnPagination}
            />
          </S.SectionSearchResultData>
        ) : (
          <S.SectionSearchResultData
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            Não existem artigos relacionados ao termo pesquisado!
          </S.SectionSearchResultData>
        )}

        <S.SearchResultContainer>
          {searchResult?.data?.map((item) => (
            <SearchResultItem key={item.id} item={item} />
          ))}
        </S.SearchResultContainer>
      </S.SectionSearchResultWrapper>
    </Container>
  )
}

SectionSearchResult.propTypes = {
  searchResult: PropTypes.shape({
    size: PropTypes.number,
    data: PropTypes.array,
    pages: PropTypes.number
  }).isRequired,
  lastSearch: PropTypes.string,
  fnPagination: PropTypes.func
}
