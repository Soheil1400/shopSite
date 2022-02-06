import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";
import CategoryList from "./category list/categoryList";
import MadeForYou from "./madeForYou/madeForYou";
import AboutUs from "./aboutUs/aboutUs";
import Brands from "./brands/brands";
import Ads from "./ads/ads";
import {useSelector} from "react-redux";
import {useMemo} from "react";

const HomeComponent = () => {
    const items = useSelector(state => state.cart.items)
    const total = useMemo(()=>  (state) => state.cart.items.reduce((price, item) => price + (item.price * item.count), 0) , [items] )
    const total_price = useSelector((state) => state.cart.items.reduce((price, item) => price + (item.price * item.count), 0))
    console.log(items)
    console.log(total)
    const BoxCustom = styled(Box)({
        display: 'flex',
        flexDirection: 'column',
        padding: '12px',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1200px',
        margin: 'auto'
    })
    return (
        <BoxCustom>
            <Brands title={'Cars'} category={'car'}/>
            <Ads/>
            <Brands title={'Mobile Phones'} category={'motor'}/>
            <Brands title={'Gadget'} category={'gadget'}/>
            <CategoryList/>
            <MadeForYou/>
            <AboutUs/>
        </BoxCustom>
    )
}

export default HomeComponent