import FooterList from "./footerList";
import {Grid} from "@mui/material";
import {footerListCustomer} from "../../data/footerList";

const FooterCustomer = ()=>{
    return(
        <Grid item xs={12} sm={6} lg={3} mb={2}>
            <FooterList list={footerListCustomer}/>
        </Grid>
    )
}

export default FooterCustomer