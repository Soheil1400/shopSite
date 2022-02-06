import '../styles/globals.css'
import './home/SlideShow/SlideShow.css'
import Layout from '../components/layout/layout'

export default function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}
