import { FC } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import Head from 'next/head'
import GlobalStyle from '../styles/global'
import 'swiper/css'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="rating" content="general"/>
        <meta name="language" content="pt-BR"/>
        <meta name="robots" content="index, follow"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta property="fb:admins" content=""/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="Flix Benefícios"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="creator" content="Flix Benefícios"/>
        <meta name="publisher" content="Flix Benefícios"/>
        <meta name="copyright" content="© 2024 Flix Benefícios"/>
        <meta name="theme-color" content="#5CB9F2"/>
        <meta name="msapplication-TileColor" content="#5CB9F2"/>
      </Head>
      <Component {...pageProps}/>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App