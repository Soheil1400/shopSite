import {Grid,Rating} from "@mui/material";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AddIcon from "@mui/icons-material/Add";
import {TypographyPrime,TypographyMain,TypographyGray,RedButton,PMButton} from "../../style/style";
import {useMediaQuery} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, decreaseItem} from "../../redux/reducer/cart.reducer";

const ProductInfo = ({product}) =>{
    const items = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()
    const matches = useMediaQuery('(min-width:400px)')
    return(
        <Grid item xs={12} sm={12} md={6}>
            <Grid p={matches === true ? 3 : 0}>
                <TypographyMain mb={2} fontWeight={'bold'} fontSize={'30px'}>
                    {product.name}
                </TypographyMain>
                <Grid mb={2}>
                    <TypographyGray fontSize={'15px'} component={'span'}>
                        Brand:
                    </TypographyGray>
                    <TypographyMain ml={1} component={'span'}  fontSize={'16px'}>
                        {product.brand}
                    </TypographyMain>
                </Grid>
                <Grid display={'flex'} alignItems={'center'} mb={2}>
                    <TypographyGray mr={1} component={'span'} variant={'body2'} fontSize={'16px'}>
                        Rated:
                    </TypographyGray>
                    <Rating size={'small'} readOnly value={product.rate} precision={1}/>
                    <TypographyMain ml={1} component={'span'}>
                        (50)
                    </TypographyMain>
                </Grid>
                <Grid mb={3}>
                    <TypographyPrime mb={0.5} component={'h2'} fontSize={'25px'} fontWeight={'bold'}>
                        ${product.sale === true ? (product.price*(100-product.MSale))/100 : product.price}
                    </TypographyPrime>
                    <TypographyMain>
                        Stock Available
                    </TypographyMain>
                </Grid>
                <Grid display={items.filter(i => i.id === product.id).length === 0 ? 'flex' : 'none'}>
                    <Grid mb={4}>
                        <RedButton onClick={()=>dispatch(addToCart(product))} sx={{padding:'7px 22px'}} variant="contained">Add to Cart</RedButton>
                    </Grid>
                </Grid>
                <Grid display={items.filter(i => i.id === product.id).length === 0 ? 'none' : 'flex'}>
                    <Grid  alignItems={'center'} mb={4}>
                        <PMButton onClick={()=>dispatch(decreaseItem(product))}  sx={{padding:'7px'}} variant="contained"><HorizontalRuleIcon/></PMButton>
                        <TypographyMain component={'span'} m={2.5} fontSize={'20px'}>
                            {items.filter(i => i.id === product.id).length === 0 ? '' : items.filter(i => i.id === product.id)[0].count}
                        </TypographyMain>
                        <PMButton onClick={()=>dispatch(addToCart(product))} sx={{padding:'7px'}} variant="contained"><AddIcon/></PMButton>
                    </Grid>
                </Grid>
                <Grid mb={2}>
                    <TypographyGray component={'span'}>
                        Sold By:
                    </TypographyGray>
                    <TypographyMain ml={1} component={'span'}  fontSize={'16px'}>
                        {product.vendor}
                    </TypographyMain>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProductInfo