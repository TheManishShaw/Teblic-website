import Layout from '../components/Layout'
import '../styles/globals.css'
import Head from 'next/dist/shared/lib/head';
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="description" content="Tecblic Website"/>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
