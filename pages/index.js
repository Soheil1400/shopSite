import styles from '../styles/Home.module.css'
import Cart from "../pages/home/Cart/Cart"
export default function Home() {
  return (
    <div className={styles.container}>
      Home
      <Cart/>
    </div>
  )
}
