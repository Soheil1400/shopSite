import {Avatar, Grid, Rating, Typography} from "@mui/material";
import Theme from "../../theme/theme";
import {styled} from "@mui/material/styles";

const ProductTabsReviews = ({product}) => {
    const TypographyMain = styled(Typography)({
        color: Theme.palette.secondary.dark
    })
    const TypographyGray = styled(Typography)({
        color: Theme.palette.secondary.light
    })
    const TypographyPrime = styled(Typography)({
        color: Theme.palette.primary.main
    })
    return (
        <>
            {product.reviews.map(rev => (
                    <Grid container key={rev.id} display={'flex'} alignItems={'center'} my={1}>
                        <Grid item xs={3} sm={1} md={0.8} lg={0.7}>
                            <Avatar sx={{width: 48, height: 48}} alt="Remy Sharp"
                                    src="https://bonik-react.vercel.app/assets/images/faces/7.png"/>
                        </Grid>
                        <Grid item xs={8} sm={3.3} md={2.5} lg={2}>
                            <Grid>
                                <TypographyMain fontSize={'16px'} fontWeight={'400'}>
                                    {rev.name}
                                </TypographyMain>
                            </Grid>
                            <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                <Rating readOnly defaultValue={4.7} precision={0.1} size={'small'}/>
                                <Typography component={'span'}>
                                    {rev.rate}
                                </Typography>
                                <TypographyGray component={'span'}>
                                    {rev.time}
                                </TypographyGray>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <TypographyMain my={2}>
                                {rev.review}
                            </TypographyMain>
                        </Grid>
                    </Grid>
                ))}
        </>
    )
}

export default ProductTabsReviews