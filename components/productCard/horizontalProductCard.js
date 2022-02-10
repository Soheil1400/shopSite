import {PaperCustomH} from "../../style/style";
import {Grid, Typography} from "@mui/material";
import {ProductData} from "../../data/Productdata";
import ProductCardChip from "./productCardChip";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Theme from "../../theme/theme";
import Image from 'next/image'
import ProductCartName from "./productCartName";
import ProductCartRating from "./productCartRating";
import ProductCartPrice from "./productCartPrice";
import ProductCartAdd from "./productCartAdd";
import ProductCartNumber from "./productCartNumber";
import {useDispatch, useSelector} from "react-redux";
import ProductCartDec from "./productCartDec";
import {useState} from "react";

const HorizontalProductCard = () => {
    const dispatch = useDispatch
    const items = useSelector((state) => state.cart.items)
    const [show,setShow] = useState(false)
    return(
        <Grid container p={3}>
            <Grid item xs={12} lg={8}>
                <PaperCustomH >
                    <Grid container onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
                        <Grid item sm={12} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                            <Grid display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'}>
                                <Grid mr={12}>
                                    <ProductCardChip product={ProductData[0]}/>
                                </Grid>
                                <Grid display={show === true ? 'flex' : 'none'}>
                                    <RemoveRedEyeIcon/>
                                </Grid>
                            </Grid>
                            <Grid>
                                <FavoriteBorderIcon sx={{color:Theme.palette.secondary.light}}/>
                            </Grid>
                        </Grid>
                        <Grid item sm={2.7}>
                            <Image width={'160px'} height={'160px'} src={ProductData[0].images[0].image}/>
                        </Grid>
                        <Grid item sm={9.3} display={'flex'} flexDirection={'column'} justifyContent={'space-around'}>
                            <Grid>
                                <Typography sx={{textDecorationLine:'underline',color:Theme.palette.secondary.light,'&:hover':{color:Theme.palette.primary.main}}} fontSize={'18px'}>
                                    {ProductData[0].brand}
                                </Typography>
                            </Grid>
                            <Grid>
                                <ProductCartName product={ProductData[0]} fontSize={'18px'}/>
                            </Grid>
                            <Grid display={'flex'} justifyContent={'space-between'}>
                                <ProductCartRating product={ProductData[0]}/>
                                <ProductCartDec items={items} dispatch={dispatch} product={ProductData[0]}/>
                            </Grid>
                            <Grid display={'flex'} justifyContent={'space-between'}>
                                <ProductCartPrice product={ProductData[0]} fontSize={'17px'}/>
                                <ProductCartNumber product={ProductData[0]} items={items}/>
                            </Grid>
                            <Grid display={'flex'} justifyContent={'flex-end'} height={'27px'}>
                                <Grid display={show === true ? 'flex' : 'none'}>
                                    <ProductCartAdd product={ProductData[0]} dispatch={dispatch}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </PaperCustomH>
            </Grid>
        </Grid>
    )
}

export default HorizontalProductCard