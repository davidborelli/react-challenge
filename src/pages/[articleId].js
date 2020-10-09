import Head from 'next/head'
import { NextSeo } from 'next-seo'

import Container from 'components/Container'
import PostHeader from 'components/PostHeader'
import PostContent from 'components/PostContent'
import Biography from 'components/Biography'
import JsonSchema from 'components/JsonSchema'

import { getArticle } from 'services/search'
import PropTypes from 'prop-types'

export default function Article({ response }) {
  const {
    title,
    headline,
    author,
    published,
    featured_media,
    content,
    categories,
    metas
  } = response

  return (
    <>
      <Head>
        <title>{title} - Mejor com Salud</title>
      </Head>
      <NextSeo {...metas} />
      <Container isPost>
        <PostHeader
          title={title}
          headline={headline}
          author={author}
          published={published}
          featured_media={featured_media}
          categories={categories}
        />
        <PostContent content={content} />
        <Biography author={author} />
        <JsonSchema />
      </Container>
    </>
  )
}

export async function getServerSideProps(context) {
  const response = await getArticle(context?.query?.articleId)

  return {
    props: {
      response
    }
  }
}

Article.propTypes = {
  response: PropTypes.object
}
