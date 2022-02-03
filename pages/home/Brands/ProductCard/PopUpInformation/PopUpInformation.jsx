import {Grid} from "@mui/material";
import ProductInfo from "../../../../product/ProductInfo";
import ProductImage from "../../../../product/productImage";

const PopUpInformation = ({product}) => {
    return (
        <Grid container p={2}>
            <ProductImage product={product} p={1}/>
            <ProductInfo product={product}/>
        </Grid>
    )
};
export default PopUpInformation;
