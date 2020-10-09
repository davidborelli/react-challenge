import Head from 'next/head'
import PropTypes from 'prop-types'
import { NextSeo } from 'next-seo'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import GlobalStyles from 'styles/global.styles'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Mejor con Salud</title>
        <link rel="shortcut icon" href="/img/icon-72x72.png" />
        <link rel="apple-touch-icon" href="/img/icon-72x72.png" />
        <meta
          name="description"
          content="Revista sobre buenos hábitos y cuidados para tu salud"
        />
      </Head>
      <NextSeo
        title="Mejor con Salud"
        description="Revista sobre buenos hábitos y cuidados para tu salud"
        canonical="https://mejorconsalud.com/" // TODO: Analisar um possivel .ENV
        openGraph={{
          url: 'https://mejorconsalud.com/', // TODO: Analisar um possivel .ENV
          title: 'Mejor con Salud',
          description: 'Revista sobre buenos hábitos y cuidados para tu salud',
          images: [
            {
              url:
                'https://mejorconsalud.com/wp-content/themes/base-deploy/assets/img/lang/es_ES/logo-mobile.svg'
            }
          ],
          site_name: 'Mejor con Salud',
          locale: 'pt_BR'
        }}
        twitter={{
          handle: '@MejorSalud',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object
}
