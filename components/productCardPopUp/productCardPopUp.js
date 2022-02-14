import {Grid} from "@mui/material";
import ProductImage from "../../pages/product/productImage";
import ProductInfo from "../../pages/product/ProductInfo";
import CloseIcon from '@mui/icons-material/Close';
import Theme from "../../theme/theme";
import {styled} from "@mui/material/styles";

const ProductCardPopUp = ({product,setOpen}) => {
    const RedCloseIcon = styled(CloseIcon)({
        color:Theme.palette.primary.main,
        cursor:'pointer'
    })
    return(
        <Grid container p={2} position={'relative'} display={'flex'} flexDirection={'row'}>
            <Grid position={'absolute'} right={'10px'}>
                <RedCloseIcon onClick={()=>setOpen(false)}/>
            </Grid>
            <ProductImage margin={8} product={product} px={0} mt={6}/>
            <ProductInfo product={product}/>
        </Grid>
    )
}

export default ProductCardPopUp