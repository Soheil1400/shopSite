import {Grid} from "@mui/material";
import {TypographyGray, TypographyPrime} from "../../style/style";

const ProductCartPrice = ({product,fontSize='14px'}) =>{
    return(
        <Grid>
            <TypographyPrime fontSize={fontSize} component={'span'}>
                ${product.sale === true ? (product.price * (100 - product.MSale)) / 100 : product.price}
            </TypographyPrime>
            <TypographyGray fontSize={fontSize} sx={{textDecoration: 'line-through'}} component={'span'} mx={0.5}>
                {product.sale === true ? `${product.price}.00` : ''}
            </TypographyGray>
        </Grid>
    )
}

export default ProductCartPrice