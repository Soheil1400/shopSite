import {Avatar, Grid, Rating, Typography} from "@mui/material";
import Theme from "../../theme/theme";
import {styled} from "@mui/material/styles";

const ProductTabsReviews = () =>{
    const TypographyMain = styled(Typography)({
        color: Theme.palette.secondary.dark
    })
    const TypographyGray = styled(Typography)({
        color: Theme.palette.secondary.light
    })
    const TypographyPrime = styled(Typography)({
        color: Theme.palette.primary.main
    })
    return(
        <Grid container display={'flex'} alignItems={'center'} my={1}>
            <Grid item xs={3} sm={1} md={0.8} lg={0.7}>
                <Avatar sx={{width: 48, height: 48}} alt="Remy Sharp"
                        src="https://bonik-react.vercel.app/assets/images/faces/7.png"/>
            </Grid>
            <Grid item xs={8} sm={3.3} md={2.5} lg={2}>
                <Grid>
                    <TypographyMain fontSize={'16px'} fontWeight={'400'}>
                        Soheil Saedi
                    </TypographyMain>
                </Grid>
                <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                    <Rating readOnly defaultValue={4.7} precision={0.1} size={'small'}/>
                    <Typography component={'span'}>
                        4.7
                    </Typography>
                    <TypographyGray component={'span'}>
                        1.0 years ago
                    </TypographyGray>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <TypographyMain my={2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id
                    ut mattis. Facilisis vitae gravida egestas ac account.
                </TypographyMain>
            </Grid>
        </Grid>
    )
}

export default ProductTabsReviews