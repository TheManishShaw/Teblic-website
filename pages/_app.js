import Layout from '../components/Layout'
import '../styles/globals.css'
import Head from 'next/dist/shared/lib/head';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="description" content="Tecblic Website"/>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4763056878068003"
     crossorigin="anonymous"></script>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
