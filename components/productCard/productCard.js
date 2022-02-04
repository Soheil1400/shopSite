import {styled} from "@mui/material/styles";
import {Chip, Dialog, Grid, IconButton, Paper, Typography ,Rating} from "@mui/material";
import Theme from "../../theme/theme";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {forwardRef, useState} from "react";
import ProductCardPopUp from "../productCardPopUp/productCardPopUp";
import Link from 'next/link'

const ProductCard = ({product}) => {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState("none");
    const selectedProduct = forwardRef(({ onClick, href }, ref) => {
        return (
            <a href={href} onClick={onClick} ref={ref}>
                Click Me
            </a>
        )
    })
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const PaperCustom = styled(Paper)({
        alignItems: 'center',
        justifyContent: 'center',
        padding: '18px',
        borderRadius: '10px',
        margin: 'auto',
        boxShadow: ' rgb(3 0 71 / 9%) 0px 1px 3px',
        cursor:'pointer',
        '&:hover': {
            boxShadow: 'rgb(3 0 71 / 9%) 0px 8px 45px'
        }
    })
    const ChipCustom = styled(Chip)({
        backgroundColor: Theme.palette.primary.main,
        color: Theme.palette.primary.light,
        textAlign: 'center',
        borderRadius: '300px',
        fontSize: '12px',
    })
    const TypographyMain = styled(Typography)({
        color: Theme.palette.secondary.dark
    })
    const TypographyGray = styled(Typography)({
        color: Theme.palette.secondary.light
    })
    const TypographyPrime = styled(Typography)({
        color: Theme.palette.primary.main
    })
    const PMButton = styled(IconButton)({
        backgroundColor: Theme.palette.primary.light,
        color: Theme.palette.primary.main,
        fontWeight: 'bold',
        padding: '2px',
        textTransform: 'none',
        border: '1px solid #E94560',
        boxShadow: 'none',
        borderRadius: '5px',
        '&:hover': {
            backgroundColor: Theme.palette.primary.main,
            color: Theme.palette.primary.light,
        }
    })
    const GridSpaceBetween = styled(Grid)({
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    })
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <PaperCustom>
                <Grid onMouseEnter={()=>setShow('flex')} onMouseLeave={()=>setShow('none')} position={'relative'}>
                    <Grid>
                        {product.sale === true ? <ChipCustom label={`${product.MSale}% off`}/> : <ChipCustom label={`0% off`}/>}
                    </Grid>
                    <Grid position={'absolute'} display={show} top={'0'} right={'0'} flexDirection={'column'} justifyContent={'space-between'}>
                        <VisibilityIcon onClick={handleClickOpen} sx={{color: " rgb(43, 52, 69)"}}/>
                        <Dialog fullWidth={true} maxWidth={'sm'} open={open} onClose={handleClose}>
                            <ProductCardPopUp setOpen={setOpen} product={product}/>
                        </Dialog>
                        <FavoriteBorderIcon sx={{color: " rgb(43, 52, 69)"}}/>
                    </Grid>
                    <GridSpaceBetween p={4}>
                        <Link href={`/product/${encodeURIComponent(product.id)}`}>
                            <selectedProduct>
                                <Image src={product.images[0].image}/>
                            </selectedProduct>
                        </Link>
                    </GridSpaceBetween>
                    <GridSpaceBetween>
                        <TypographyMain>
                            {product.name}
                        </TypographyMain>
                        <PMButton>
                            <HorizontalRuleIcon/>
                        </PMButton>
                    </GridSpaceBetween>
                    <GridSpaceBetween my={0.5}>
                        <Rating pl={2} size={'small'} value={product.rate} readOnly/>
                        <TypographyMain pr={1}>
                            2
                        </TypographyMain>
                    </GridSpaceBetween>
                    <GridSpaceBetween>
                        <Grid>
                            <TypographyPrime component={'span'}>
                                ${product.sale === true ? (product.price*(100-product.MSale))/100 : product.price}.00
                            </TypographyPrime>
                            <TypographyGray sx={{textDecoration: 'line-through'}} component={'span'} mx={0.5}>
                                {product.sale === true ? `${product.price}.00` : ''}
                            </TypographyGray>
                        </Grid>
                        <PMButton>
                            <AddIcon/>
                        </PMButton>
                    </GridSpaceBetween>
                </Grid>
            </PaperCustom>
        </Grid>
    )
}

export default ProductCard