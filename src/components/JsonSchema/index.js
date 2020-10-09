import React from 'react'
import { NewsArticleJsonLd } from 'next-seo'

const JsonSchema = () => (
  <NewsArticleJsonLd
    url="https://mejorconsalud.com/" // TODO: Analisar um possivel .ENV
    title="Mejor con Salud"
    images={[
      'https://mejorconsalud.com/wp-content/themes/base-deploy/assets/img/lang/es_ES/logo-mobile.svg'
    ]}
    datePublished="2020-10-05T08:00:00+08:00"
    dateModified="2020-10-05T09:00:00+08:00"
    authorName="David Borelli"
    description="Revista sobre buenos hábitos y cuidados para tu salud"
  />
)

export default JsonSchema
