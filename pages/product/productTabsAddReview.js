import {Grid,Rating} from "@mui/material";
import {TypographyMain,TypographyPrime,RedButton,CustomTextAria} from "../../style/style";

const ProductTabsAddReview = () =>{
    return(
        <>
            <Grid>
                <TypographyMain fontSize={'25px'} fontWeight={'bold'}>
                    Write a Review for this product
                </TypographyMain>
            </Grid>
            <Grid>
                <form>
                    <Grid my={2}>
                        <TypographyMain component={'span'} fontSize={'16px'}>
                            Your Rating
                        </TypographyMain>
                        <TypographyPrime ml={1} component={'span'} fontSize={'20px'}>
                            *
                        </TypographyPrime>
                    </Grid>
                    <Grid>
                        <Rating name="rating" defaultValue={0} precision={1}/>
                    </Grid>
                    <Grid my={2}>
                        <TypographyMain component={'span'} fontSize={'16px'}>
                            Your Review
                        </TypographyMain>
                        <TypographyPrime ml={1} component={'span'} fontSize={'20px'}>
                            *
                        </TypographyPrime>
                    </Grid>
                    <Grid>
                        <CustomTextAria name={'review'}/>
                    </Grid>
                    <Grid my={2}>
                        <RedButton disabled sx={{padding: '8px 24px'}}>Submit</RedButton>
                    </Grid>
                </form>
            </Grid>
        </>
    )
}

export default ProductTabsAddReview