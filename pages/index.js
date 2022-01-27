import styles from '../styles/Home.module.css'
import Cart from "../pages/home/Cart/Cart"
import Footer from '../components/footer/footer';
import BottomNav from '../components/BottomNavigation/BottonNavigation';
export default function Home() {
  return (
    <div className={styles.container}>
        <Footer/>
        <BottomNav ItemCard={'100'}/>
      <Cart/>
    </div>
  )
}
