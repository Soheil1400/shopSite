import {Box, Grid} from '@mui/material';
import {styled} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Theme from "../../theme/theme";
import FooterLogo from "./footerLogo";
import FooterAboutCustomer from "./footerAbout&Customer";
import FooterContactUs from "./footerContactUs";

const Footer = () => {
    const matchesMenu = useMediaQuery('(min-width:1027px)');
    const CustomBox = styled(Box)({
        backgroundColor: Theme.palette.secondary.main,
        padding: matchesMenu === true ? '6rem 11rem' :'5rem 2rem',
        color: '#fff',
        marginTop:'2rem'
    })
    return (
        <CustomBox>
            <Grid container>
                <FooterLogo/>
                <FooterAboutCustomer/>
                <FooterContactUs/>
            </Grid>
        </CustomBox>
    )
}

export default Footer