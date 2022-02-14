import '../styles/globals.css'
import '../styles/FlashesAndSlideShow.css'
import Layout from '../components/layout/layout'

export default function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}
