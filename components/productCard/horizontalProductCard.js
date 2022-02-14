import {PaperCustom} from "../../style/style";
import {Dialog, Grid, Typography} from "@mui/material";
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
import useMediaQuery from "@mui/material/useMediaQuery";
import ProductCardPopUp from "../productCardPopUp/productCardPopUp";

const HorizontalProductCard = ({product}) => {
    const dispatch = useDispatch()
    const items = useSelector((state) => state.cart.items)
    const [show, setShow] = useState(false)
    const [open, setOpen] = useState(false);
    const matches = useMediaQuery('(min-width:400px)')
    const matchesT = useMediaQuery('(min-width:800px)')
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <PaperCustom sx={{px: '16px', py: '14px', cursor: 'pointer',minHeight:'200px'}}>
            <Grid container spacing={matches === true ? 3 : 0} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                <Grid item xs={12} sm={2.5} display={'flex'} alignItems={'center'} flexDirection={'column'}>
                    <Grid width={'100%'} display={'flex'} flexDirection={'row'} justifyContent={'space-between'}
                          alignItems={'center'}>
                        <Grid>
                            <ProductCardChip product={product}/>
                        </Grid>
                        <Grid display={show === true || matchesT === false ? 'flex' : 'none'}>
                            <RemoveRedEyeIcon onClick={handleClickOpen}/>
                            <Dialog fullWidth={true} maxWidth={'sm'} open={open} onClose={handleClose}>
                                <ProductCardPopUp setOpen={setOpen} product={product}/>
                            </Dialog>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Image src={product.images[0].image}/>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={9.5} md={9} lineHeight={'40px'} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                    <Grid>
                        <Typography mr={1} component={'span'} sx={{
                            textDecorationLine: 'underline',
                            color: Theme.palette.secondary.light,
                            '&:hover': {color: Theme.palette.primary.main}
                        }} fontSize={'15px'}>
                            {product.brand}
                        </Typography>
                        <Typography component={'span'} sx={{
                            textDecorationLine: 'underline',
                            color: Theme.palette.secondary.light,
                            '&:hover': {color: Theme.palette.primary.main}
                        }} fontSize={'15px'}>
                            {product.category}
                        </Typography>
                    </Grid>
                    <Grid>
                        <ProductCartName product={product} fontSize={'16px'}/>
                    </Grid>
                    <Grid display={'flex'} justifyContent={'space-between'}>
                        <ProductCartRating product={product}/>
                    </Grid>
                    <Grid display={'flex'} justifyContent={'space-between'}>
                        <ProductCartPrice product={product} fontSize={'17px'}/>
                    </Grid>
                    <Grid width={'100%'} display={matchesT === false && matches === true ? 'flex' : 'none'} alignItems={'center'} justifyContent={'space-between'}>
                        <Grid display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
                            <Grid>
                                <ProductCartDec items={items} dispatch={dispatch} product={product} padding={'4px'}/>
                            </Grid>
                            <Grid pl={1} mx={1}>
                                <ProductCartNumber product={product} items={items}/>
                            </Grid>
                            <Grid pb={0.5}>
                                <ProductCartAdd product={product} dispatch={dispatch} padding={'4px'}/>
                            </Grid>
                        </Grid>
                        <Grid>
                            <FavoriteBorderIcon sx={{color: Theme.palette.secondary.light}}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={0.4} display={matchesT === false && matches === true ? 'none' : 'flex'} flexDirection={matchesT === true ? 'column' : 'row-reverse'} justifyContent={'space-between'}
                      alignItems={'center'}>
                    <Grid>
                        <FavoriteBorderIcon sx={{color: Theme.palette.secondary.light}}/>
                    </Grid>
                    <Grid   display={show === true || matchesT === false ? 'flex' : 'none'} flexDirection={matchesT === true ? 'column' : 'row'} justifyContent={'space-between'}>
                        <Grid>
                            <ProductCartDec items={items} dispatch={dispatch} product={product} padding={'4px'}/>
                        </Grid>
                        <Grid pl={1.5} my={matchesT === true ? 1 : 0.5}>
                            <ProductCartNumber product={product} items={items}/>
                        </Grid>
                        <Grid>
                            <ProductCartAdd product={product} dispatch={dispatch} padding={'4px'}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </PaperCustom>
    )
}

export default HorizontalProductCard