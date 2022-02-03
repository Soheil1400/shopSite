import {Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import Theme from "../../theme/theme";
import ProductCard from "../../components/productCard/productCard";

const ProductRelatedProduct = ({product}) =>{
    const TypographyMain = styled(Typography)({
        color: Theme.palette.secondary.dark
    })
    return(
        <Grid item xs={12} my={2}>
            <TypographyMain mb={3} fontWeight={'bold'} fontSize={'20px'}>
                Related Products
            </TypographyMain>
            <Grid container spacing={4}>
                <ProductCard product={product}/>
                <ProductCard product={product}/>
                <ProductCard product={product}/>
                <ProductCard product={product}/>
            </Grid>
        </Grid>
    )
}

export default ProductRelatedProduct