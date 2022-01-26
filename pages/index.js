import styles from '../styles/Home.module.css'
import Footer from '../components/footer/footer'
import BottomNav from '../components/BottomNavigation/BottonNavigation';
export default function Home() {
  return (
    <div className={styles.container}>
      <Footer/>
      <BottomNav ItemCard={'100'}/>
    </div>
  )
}
