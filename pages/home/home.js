import Brands from "./Brands/Brands";
import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";
import CategoryList from "./category list/categoryList";
import MadeForYou from "./madeForYou/madeForYou";
import AboutUs from "./aboutUs/aboutUs";

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
            <CategoryList/>
            {/*<Brands/>*/}
            <MadeForYou/>
            <AboutUs/>
        </BoxCustom>
    )
}

export default HomeComponent