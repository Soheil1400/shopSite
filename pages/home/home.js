import CategoryList from "./category list/categoryList";
import MadeForYou from "./madeForYou/madeForYou";
import AboutUs from "./aboutUs/aboutUs";
import Brands from "./brands/brands";
import Ads from "./ads/ads";
import {FlashDeal} from "./flashDeal/FlashDeal";
import Category from "./top_categories/TopCategories";
import SlideShow from "./slideShow/SlideShow";
import NewArrival from "./newArrival/newarrival";
import RatingAndFeature from "./topRatingAndFeature/RatingAndFeature";
import {BoxCustom} from "../../style/style";

const HomeComponent = () => {
    return (
        <>
            <SlideShow/>
            <BoxCustom>
                <FlashDeal/>
                <Category/>
                <RatingAndFeature/>
                <NewArrival/>
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