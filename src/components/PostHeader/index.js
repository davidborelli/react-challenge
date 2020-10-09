import PropTypes from 'prop-types'
import { WatchLater } from '@styled-icons/material-outlined/WatchLater'
import * as S from './styles'
import Tag from 'components/Tag'

export default function PostHeader({
  title,
  headline,
  author,
  published,
  featured_media,
  categories
}) {
  return (
    <S.PostHeaderWrapper>
      <S.Title>{title}</S.Title>
      <S.WrittenBy>
        <S.AuthorName href={author.link} target="_blank">
          Daniela Echeverri Castro{' '}
        </S.AuthorName>
        <S.PostDate>
          · <WatchLater size={18} />{' '}
          {new Date(published).toLocaleString('pt-BR')}
        </S.PostDate>
      </S.WrittenBy>
      <S.Category>
        {categories.map(({ id, name, link }) => (
          <a key={id} href={link} target="_blank" rel="noreferrer">
            <Tag>{name}</Tag>
          </a>
        ))}
      </S.Category>
      <S.PostHeaderSubtitle>{headline}</S.PostHeaderSubtitle>
      <S.PostImage src={featured_media.medium} alt="" />
    </S.PostHeaderWrapper>
  )
}

PostHeader.propTypes = {
  title: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  published: PropTypes.string.isRequired,
  featured_media: PropTypes.object,
  categories: PropTypes.arrayOf(PropTypes.object)
}
