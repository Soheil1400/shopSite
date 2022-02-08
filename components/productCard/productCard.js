import {styled} from "@mui/material/styles";
import {Chip,Dialog,Grid,Rating} from "@mui/material";
import Theme from "../../theme/theme";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {forwardRef, useState} from "react";
import ProductCardPopUp from "../productCardPopUp/productCardPopUp";
import Link from 'next/link'
import {TypographyGray,TypographyPrime,TypographyMain,PaperCustomH,PMButton} from "../../style/style";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, decreaseItem} from "../../redux/reducer/cart.reducer";

const ProductCard = ({product}) => {
    const items = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState("none");
    const SelectedProduct = forwardRef(({onClick, href}, ref) => {
        return (
            <a href={href} onClick={onClick} ref={ref}>
                <Image src={product.images[0].image}/>
            </a>
        )
    })
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const ChipCustom = styled(Chip)({
        backgroundColor: Theme.palette.primary.main,
        color: Theme.palette.primary.light,
        textAlign: 'center',
        borderRadius: '300px',
        fontSize: '12px',
    })
    const GridSpaceBetween = styled(Grid)({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    })
    return (
        <PaperCustomH>
            <Grid onMouseEnter={() => setShow('flex')} onMouseLeave={() => setShow('none')} position={'relative'}>
                <Grid>
                    {product.sale === true ? <ChipCustom label={`${product.MSale}% off`}/> :
                        <ChipCustom label={`0% off`}/>}
                </Grid>
                <Grid position={'absolute'} display={show} top={'0'} right={'0'} flexDirection={'column'}
                      justifyContent={'space-between'}>
                    <VisibilityIcon onClick={handleClickOpen} sx={{color: " rgb(43, 52, 69)"}}/>
                    <Dialog fullWidth={true} maxWidth={'sm'} open={open} onClose={handleClose}>
                        <ProductCardPopUp setOpen={setOpen} product={product}/>
                    </Dialog>
                    <FavoriteBorderIcon sx={{color: " rgb(43, 52, 69)"}}/>
                </Grid>
                <GridSpaceBetween>
                    <Link href={`/product/${encodeURIComponent(product.id)}`}>
                        <SelectedProduct>
                        </SelectedProduct>
                    </Link>
                </GridSpaceBetween>
                <GridSpaceBetween sx={{height:'25px'}}>
                    <TypographyMain>
                        {product.name}
                    </TypographyMain>
                    <PMButton sx={{padding:'2px',display:items.filter(i => i.id === product.id).length === 0 ? 'none' : 'flex'}}  onClick={()=>dispatch(decreaseItem(product))}>
                        <HorizontalRuleIcon/>
                    </PMButton>
                </GridSpaceBetween>
                <GridSpaceBetween my={0.5} sx={{height:'20px'}}>
                    <Rating pl={2} size={'small'} value={product.rate} readOnly/>
                    <TypographyMain pr={1}>
                        {items.filter(i => i.id === product.id).length === 0 ? '' : items.filter(i => i.id === product.id)[0].count}
                    </TypographyMain>
                </GridSpaceBetween>
                <GridSpaceBetween>
                    <Grid>
                        <TypographyPrime component={'span'}>
                            ${product.sale === true ? (product.price * (100 - product.MSale)) / 100 : product.price}.00
                        </TypographyPrime>
                        <TypographyGray sx={{textDecoration: 'line-through'}} component={'span'} mx={0.5}>
                            {product.sale === true ? `${product.price}.00` : ''}
                        </TypographyGray>
                    </Grid>
                    <PMButton sx={{padding:'2px'}} onClick={()=>dispatch(addToCart(product))}>
                        <AddIcon/>
                    </PMButton>
                </GridSpaceBetween>
            </Grid>
        </PaperCustomH>
    )
}

export default ProductCard