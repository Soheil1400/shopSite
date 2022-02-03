import {Box, Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import FooterContactUsSocial from "./footerContactUsSocial";

const FooterContactUs = () =>{
    const CustomTypographyNone = styled(Typography)({
        color: '#A4B4BE'
    })
    return(
        <Grid item xs={12} sm={6} lg={2.5} mb={2}>
            <Grid mb={2}>
                <Typography variant={'h5'}>
                    Contact US
                </Typography>
            </Grid>
            <Grid mb={2}>
                <CustomTypographyNone>
                    70 Washington Square South, New York, NY 10012, United States
                </CustomTypographyNone>
            </Grid>
            <Grid mb={2}>
                <CustomTypographyNone>
                    Email: uilib.help@gmail.com
                </CustomTypographyNone>
            </Grid>
            <Grid mb={2}>
                <CustomTypographyNone>
                    Phone: +1 1123 456 780
                </CustomTypographyNone>
            </Grid>
            <FooterContactUsSocial/>
        </Grid>
    )
}

export default FooterContactUs