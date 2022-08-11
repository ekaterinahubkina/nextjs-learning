import Head from 'next/head'
import type { AppProps } from 'next/app'
import { Header } from 'components/common/Header/Header'
import { Footer } from 'components/common/Footer/Footer'
import { Content } from 'components/common/Content/Content'
import '../styles/globals.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Content >
        <Component {...pageProps} />
      </Content>
      <Footer />
    </>
  )

}

export default MyApp
