import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { NavigateNext } from '@styled-icons/material/NavigateNext'

import * as S from './styles'

export default function Pagination({ pagesNumber, fnPagination }) {
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setCurrentPage(1)
  }, [pagesNumber])

  const handleNavPages = (direction) => {
    switch (direction) {
      case 'next':
        if (currentPage < pagesNumber) {
          fnPagination(true, currentPage + 1)
          setCurrentPage(currentPage + 1)
        }
        break

      case 'previous':
        if (currentPage > 1) {
          fnPagination(true, currentPage - 1)
          setCurrentPage(currentPage - 1)
        }
        break

      default:
        break
    }
  }

  return (
    <S.PaginationWrapper>
      <S.Navigator
        onClick={() => handleNavPages('previous')}
        active={currentPage > 1}
        previous
      >
        <NavigateNext size={30} />
      </S.Navigator>
      <S.PageInformation>
        {currentPage} <span>de</span> {pagesNumber}
      </S.PageInformation>
      <S.Navigator
        onClick={() => handleNavPages('next')}
        active={currentPage < pagesNumber}
      >
        <NavigateNext size={30} />
      </S.Navigator>
    </S.PaginationWrapper>
  )
}

Pagination.propTypes = {
  pagesNumber: PropTypes.number.isRequired,
  fnPagination: PropTypes.func
}
