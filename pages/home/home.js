import Brands from "./Brands/Brands";
import {styled} from "@mui/material/styles";
import {Box} from "@mui/material";

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
            <Brands/>
        </BoxCustom>
    )
}

export default HomeComponent