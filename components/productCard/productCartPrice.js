import {Grid} from "@mui/material";
import {TypographyGray, TypographyPrime} from "../../style/style";

const ProductCartPrice = ({product}) =>{
    return(
        <Grid>
            <TypographyPrime component={'span'}>
                ${product.sale === true ? (product.price * (100 - product.MSale)) / 100 : product.price}
            </TypographyPrime>
            <TypographyGray sx={{textDecoration: 'line-through'}} component={'span'} mx={0.5}>
                {product.sale === true ? `${product.price}.00` : ''}
            </TypographyGray>
        </Grid>
    )
}

export default ProductCartPrice