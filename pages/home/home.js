import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";
import CategoryList from "./category list/categoryList";
import MadeForYou from "./madeForYou/madeForYou";
import AboutUs from "./aboutUs/aboutUs";
import Brands from "./brands/brands";
import Ads from "./ads/ads";
import {FlashDeal} from "./flashDeal/FlashDeal";
import Category from "./top_categories/TopCategories";
import SlideShow from "./SlideShow/SlideShow";
import Newarrival from "../../components/newArrival/newarrival";
import RatingAndFeature from "../../components/topRatingAndFeature/RatingAndFeature";

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
        <>
            <SlideShow/>
            <BoxCustom>
                <FlashDeal/>
                <Category/>
                <RatingAndFeature/>
                <Newarrival/>
                <Brands title={'Car'} category={'car'} display={'none'}/>
                <Ads/>
                <Brands title={'Motor'} category={'motor'} display={'flex'}/>
                <Brands title={'Gadget'} category={'gadget'} display={'flex'}/>
                <CategoryList/>
                <MadeForYou/>
                <AboutUs/>
            </BoxCustom>
        </>
    )
}

export default HomeComponent