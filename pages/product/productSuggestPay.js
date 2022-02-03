import {Box, Button, Grid, Typography} from "@mui/material";
import Theme from "../../theme/theme";
import {styled} from "@mui/material/styles";

const ProductSuggestPay = () =>{
    const RedButton = styled(Button)({
        backgroundColor: Theme.palette.primary.main,
        color: Theme.palette.primary.light,
        fontWeight: 'bold',
        textTransform: 'none',
        border: `1px solid ${Theme.palette.primary.main}`,
        '&:hover': {
            backgroundColor: Theme.palette.primary.main,
            color: Theme.palette.primary.light
        },
        ":disabled": {
            backgroundColor: '#DAE1E7',
            color: Theme.palette.secondary.light
        }
    })
    const WhiteButton = styled(Button)({
        backgroundColor: Theme.palette.primary.light,
        color: Theme.palette.primary.main,
        fontWeight: 'bold',
        textTransform: 'none',
        border: `1px solid ${Theme.palette.primary.main}`,
        '&:hover': {
            backgroundColor: Theme.palette.primary.main,
            color: Theme.palette.primary.light
        },
        ":disabled": {
            backgroundColor: '#DAE1E7',
            color: Theme.palette.secondary.light
        }
    })
    const CustomBox = styled(Box)({
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: '8px',
        padding: '37px 10px',
        border: '1px solid rgb(218, 225, 231)'
    })
    const TypographyGray = styled(Typography)({
        color: Theme.palette.secondary.light
    })
    const TypographyPrime = styled(Typography)({
        color: Theme.palette.primary.main
    })
    return(
        <Grid item xs={12} sm={4} md={3} lg={3}>
            <CustomBox>
                <Grid my={2}>
                    <TypographyPrime fontSize={'20px'}
                                fontWeight={'bold'}>
                        $2500
                    </TypographyPrime>
                    <TypographyGray>
                        Save $500
                    </TypographyGray>
                </Grid>
                <Grid display={'flex'} flexDirection={'row'}>
                    <Grid mr={1}>
                        <RedButton>
                            Add to Cart
                        </RedButton>
                    </Grid>
                    <Grid>
                        <WhiteButton>
                            Add to List
                        </WhiteButton>
                    </Grid>
                </Grid>
            </CustomBox>
        </Grid>
    )
}

export default ProductSuggestPay