import PropTypes from 'prop-types'
import Icons from './icons'
import * as S from './styles'

export default function Biography({ author }) {
  return (
    <>
      <S.BiographyWrapper>
        <S.AuthorName href={author.link} target="blank" rel="noreferrer">
          {author.name}
        </S.AuthorName>
        <S.AuthorPhotoAndSocialMedia>
          <S.AuthorPhoto src={author.picture} alt={author.name} />
          <S.SocialMedia>
            {Object.entries(author.social_profiles).map(([key, value]) => {
              const Icon = Icons[key]
              if (value !== null) {
                return (
                  <a key={key} href={value} target="blank" rel="noreferrer">
                    <Icon size={20} />
                  </a>
                )
              }
            })}
          </S.SocialMedia>
        </S.AuthorPhotoAndSocialMedia>
        <S.AuthorInfo
          dangerouslySetInnerHTML={{ __html: author.description }}
        />
      </S.BiographyWrapper>
    </>
  )
}

Biography.propTypes = {
  author: PropTypes.object.isRequired
}
