import FooterLogo from "./footerLogo";
import FooterContactUs from "./footerContactUs";
import FooterAbout from "./footerAbout";
import FooterCustomer from "./footerCustomer";
import useMediaQuery from "@mui/material/useMediaQuery";
import {Box, Grid} from '@mui/material';
import {styled} from "@mui/material/styles";
import Theme from "../../theme/theme";


const Footer = () => {
    const matchesMenu = useMediaQuery('(min-width:1027px)');
    const CustomBox = styled(Box)({
        backgroundColor: Theme.palette.secondary.main,
        padding: matchesMenu === true ? '6rem 11rem' : '5rem 2rem',
        color: '#fff',
        marginTop: '2rem'
    })
    return (
        <CustomBox>
            <Grid container>
                <FooterLogo/>
                <FooterAbout/>
                <FooterCustomer/>
                <FooterContactUs/>
            </Grid>
        </CustomBox>
    )
}

export default Footer