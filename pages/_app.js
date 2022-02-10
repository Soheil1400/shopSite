import '../styles/globals.css'
import '../pages/home/flashDeal/FlashDeal.style.css'
import '../pages/home/SlideShow/SlideShow.css'
import Layout from '../components/layout/layout'

export default function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}
