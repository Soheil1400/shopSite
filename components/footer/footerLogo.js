import {Grid, Typography} from "@mui/material";
import Image from "next/image";
import Logo from "../../asset/general/logo.svg";
import {styled} from "@mui/material/styles";
import FooterLogoStore from "./footerLogoStore";

const FooterLogo = () => {
    const CustomTypographyNone = styled(Typography)({
        color: '#A4B4BE'
    })
    return (
        <Grid item xs={12} sm={6} lg={4} mb={2} pr={1}>
            <Grid>
                <Image src={Logo} alt="logo"/>
            </Grid>
            <Grid mt={2} mb={1}>
                <CustomTypographyNone>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida.
                    Sit
                    diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.
                </CustomTypographyNone>
            </Grid>
            <FooterLogoStore/>
        </Grid>
    )
}

export default FooterLogo