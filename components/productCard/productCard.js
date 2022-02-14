import {styled} from "@mui/material/styles";
import {Dialog, Grid, Paper} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import ProductCardChip from "./productCardChip";
import ProductCartImage from "./productCartImage";
import ProductCartName from "./productCartName";
import ProductCartRating from "./productCartRating";
import ProductCartPrice from "./productCartPrice";
import ProductCartDec from "./productCartDec";
import ProductCartAdd from "./productCartAdd";
import ProductCartNumber from "./productCartNumber";
import {useState} from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ProductCardPopUp from "../productCardPopUp/productCardPopUp";

const ProductCard = ({product,hover=false}) => {
    const [show, setShow] = useState("none");
    const [open, setOpen] = useState(false);
    const items = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const PaperCustomH = styled(Paper)({
        alignItems: 'center',
        justifyContent: 'center',
        padding: '18px',
        borderRadius: '10px',
        margin: 'auto',
        boxShadow: ' rgb(3 0 71 / 9%) 0px 1px 3px',
        cursor: 'pointer',
        '&:hover': hover === true ? {
            boxShadow: 'rgb(3 0 71 / 9%) 0px 8px 45px'
        } :
            {

            }
    })
    const GridSpaceBetween = styled(Grid)({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    })
    return (
        <PaperCustomH>
            <Grid onMouseEnter={() => setShow('flex')} onMouseLeave={() => setShow('none')} position={'relative'}>
                <ProductCardChip product={product}/>
                <Grid position={'absolute'} display={show} top={'0'} right={'0'} flexDirection={'column'}
                      justifyContent={'space-between'}>
                    <VisibilityIcon onClick={handleClickOpen} sx={{color: " rgb(43, 52, 69)"}}/>
                    <Dialog fullWidth={true} maxWidth={'sm'} open={open} onClose={handleClose}>
                        <ProductCardPopUp setOpen={setOpen} product={product}/>
                    </Dialog>
                    <FavoriteBorderIcon sx={{color: " rgb(43, 52, 69)"}}/>
                </Grid>
                <ProductCartImage product={product}/>
                <GridSpaceBetween sx={{height: '25px'}}>
                    <ProductCartName product={product}/>
                    <ProductCartDec product={product} dispatch={dispatch} items={items}/>
                </GridSpaceBetween>
                <GridSpaceBetween my={0.5} sx={{height: '20px'}}>
                    <ProductCartRating product={product}/>
                    <ProductCartNumber product={product} items={items}/>
                </GridSpaceBetween>
                <GridSpaceBetween>
                    <ProductCartPrice product={product}/>
                    <ProductCartAdd product={product} dispatch={dispatch}/>
                </GridSpaceBetween>
            </Grid>
        </PaperCustomH>
    )
}

export default ProductCard