import { useState } from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Modal from 'components/Modal'

import Tag from 'components/Tag'

import * as S from './styles'

export default function SearchResultItem({ item }) {
  const [showModal, setShowModal] = useState(false)
  const [{ featured_media, title, categories, id }] = useState(item)

  return (
    <S.SearchResultItemWrapper>
      <Link href={id.toString()}>
        <S.SearchResultPhoto
          src={featured_media.thumbnail}
          alt={title}
          onClick={() => setShowModal(true)}
        />
      </Link>

      <S.SearchResultIDetails>
        <div>
          {categories.map(({ name, id, link }) => (
            <a href={link} key={id}>
              <Tag>{name}</Tag>
            </a>
          ))}
        </div>
        <Link href={id.toString()}>
          <S.SearchResulTitle onClick={() => setShowModal(true)}>
            {title}
          </S.SearchResulTitle>
        </Link>
      </S.SearchResultIDetails>
      {showModal && <Modal />}
    </S.SearchResultItemWrapper>
  )
}

SearchResultItem.propTypes = {
  item: PropTypes.shape({
    featured_media: PropTypes.shape({
      thumbnail: PropTypes.string
    }),
    title: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.object)
  }).isRequired
}
