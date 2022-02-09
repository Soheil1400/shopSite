import {TypographyMain} from "../../style/style";

const ProductCartName = ({product}) => {
    return(
        <TypographyMain>
            {product.name}
        </TypographyMain>
    )
}

export default ProductCartName