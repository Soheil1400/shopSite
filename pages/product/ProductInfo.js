import {Grid,Rating} from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AddIcon from "@mui/icons-material/Add";
import {TypographyPrime,TypographyMain,TypographyGray,RedButton,PMButton} from "../../style/style";

const ProductInfo = ({product}) =>{
    return(
        <Grid item xs={12} sm={12} md={6}>
            <TypographyMain mb={2} fontWeight={'bold'} fontSize={'30px'}>
                {product.name}
            </TypographyMain>
            <Grid mb={2}>
                <TypographyGray component={'span'} variant={'body2'}>
                    Brand:
                </TypographyGray>
                <TypographyMain ml={1} component={'span'}>
                    {product.brand}
                </TypographyMain>
            </Grid>
            <Grid display={'flex'} alignItems={'center'} mb={2}>
                <TypographyGray mr={1} component={'span'} variant={'body2'}>
                    Rated:
                </TypographyGray>
                <Rating size={'small'} defaultValue={product.rate} precision={1}/>
                <TypographyMain ml={1} component={'span'}>
                    (50)
                </TypographyMain>
            </Grid>
            <Grid mb={3}>
                <TypographyPrime mb={0.5} component={'h2'} fontSize={'25px'} fontWeight={'bold'}>
                    ${product.sale === true ? (product.price*(100-product.MSale))/100 : product.price}.00
                </TypographyPrime>
                <TypographyMain>
                    Stock Available
                </TypographyMain>
            </Grid>
            <Grid>
                <Grid mb={4}>
                    <RedButton variant="contained">Add to Cart</RedButton>
                </Grid>
            </Grid>
            <Grid display={'none'}>
                <Grid display={'flex'} alignItems={'center'} mb={4}>
                    <PMButton sx={{padding:'7px'}} variant="contained"><HorizontalRuleIcon/></PMButton>
                    <TypographyMain component={'span'} m={2.5} fontSize={'20px'}>
                        02
                    </TypographyMain>
                    <PMButton sx={{padding:'7px'}} variant="contained"><AddIcon/></PMButton>
                </Grid>
            </Grid>
            <Grid mb={2}>
                <TypographyGray component={'span'} variant={'body2'}>
                    Sold By:
                </TypographyGray>
                <TypographyMain ml={1} component={'span'}>
                    {product.vendor}
                </TypographyMain>
            </Grid>
        </Grid>
    )
}

export default ProductInfo