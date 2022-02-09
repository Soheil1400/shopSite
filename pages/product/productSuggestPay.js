import {Grid} from "@mui/material";
import {RedButton,TypographyPrime,TypographyGray,WhiteButton,CustomBox} from "../../style/style";
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/reducer/cart.reducer";
import {ProductData} from "../../data/Productdata";

const ProductSuggestPay = () =>{
    const dispatch = useDispatch()
    const handleAdd = () => {
        dispatch(addToCart(ProductData[0]))
        dispatch(addToCart(ProductData[6]))
        dispatch(addToCart(ProductData[11]))
        dispatch(addToCart(ProductData[14]))
    }
    return(
        <Grid item xs={12} sm={4} md={3} lg={3}>
            <CustomBox>
                <Grid my={2.5} display={'flex'} justifyContent={'center'} flexDirection={'column'} alignItems={'center'}>
                    <TypographyPrime fontSize={'20px'} fontWeight={'bold'}>
                        $2125
                    </TypographyPrime>
                    <TypographyGray>
                        Save $1500
                    </TypographyGray>
                </Grid>
                <Grid display={'flex'} flexDirection={'row'} mb={2}>
                    <Grid mr={1}>
                        <RedButton onClick={handleAdd}>
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