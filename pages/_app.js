import '../styles/globals.css'
import '../section/home/flashDeal/FlashDeal.style.css'
import '../section/home/slideShow/SlideShow.css'
import Layout from '../components/layout/layout'

export default function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}
