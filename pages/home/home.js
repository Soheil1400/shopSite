import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";
import CategoryList from "./category list/categoryList";
import MadeForYou from "./madeForYou/madeForYou";
import AboutUs from "./aboutUs/aboutUs";
import Brands from "./brands/brands";
import Ads from "./ads/ads";

const HomeComponent = () => {
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
            <Brands title={'Car'} category={'car'} display={'none'}/>
            <Ads/>
            <Brands title={'Motor'} category={'motor'} display={'flex'}/>
            <Brands title={'Gadget'} category={'gadget'} display={'flex'}/>
            <CategoryList/>
            <MadeForYou/>
            <AboutUs/>
        </BoxCustom>
    )
}

export default HomeComponent