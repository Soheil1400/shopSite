import {Grid} from "@mui/material";
import {RedButton,TypographyPrime,TypographyGray,WhiteButton,CustomBox} from "../../style/style";

const ProductSuggestPay = () =>{
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