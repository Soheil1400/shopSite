import {Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import Theme from "../../theme/theme";
import ProductCard from "../../components/productCard/productCard";
import {ProductData} from "../../data/Productdata";

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
                {ProductData.slice(0 , 4).map(product => (
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ProductCard product={product} key={product.id}/>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default ProductRelatedProduct