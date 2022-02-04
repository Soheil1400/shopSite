import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";
import CategoryList from "./category list/categoryList";
import MadeForYou from "./madeForYou/madeForYou";
import AboutUs from "./aboutUs/aboutUs";
import Brands from "./brands/brands";
import Ads from "./ads/ads";

const HomeComponent = () =>{
    const BoxCustom = styled(Box)({
        display:'flex',
        flexDirection:'column',
        padding: '12px',
        alignItems:'center',
        justifyContent:'center',
        maxWidth:'1200px',
        margin:'auto'
    })
    return(
        <BoxCustom>
            <Brands start={6} finish={12}/>
            {/*<Ads/>*/}
            <Brands start={0} finish={6}/>
            <Brands start={6} finish={12}/>
            <CategoryList/>
            <MadeForYou/>
            <AboutUs/>
        </BoxCustom>
    )
}

export default HomeComponent