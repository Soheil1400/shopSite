import styles from '../styles/Home.module.css'
import Cart from "../pages/home/Cart/Cart"
import Footer from '../components/footer/footer';
import BottomNav from '../components/BottomNavigation/BottonNavigation';
import useMediaQuery from "@mui/material/useMediaQuery";
import {experimentalStyled as styled} from "@mui/material/styles";
import CategoryList from '../components/categoryList/categoryList';
export default function Home() {

  return (
    <div className={styles.container}>
        <CategoryList/>
        {/* <Footer/>
       <BottomNav ItemCard={'100'} className={'bottom_navigation'}/> */}
      <Cart/>
    </div>
  )
}
