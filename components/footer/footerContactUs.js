import FooterContactUsSocial from "./footerContactUsSocial";
import FooterList from "./footerList";
import {Grid} from "@mui/material";
import {footerListContactUs} from "../../data/footerList";

const FooterContactUs = () =>{
    return(
        <Grid item xs={12} sm={6} lg={3} mb={2}>
            <FooterList list={footerListContactUs}/>
            <FooterContactUsSocial/>
        </Grid>
    )
}

export default FooterContactUs