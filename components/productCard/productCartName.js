import {TypographyMain} from "../../style/style";

const ProductCartName = ({product,fontSize='14px'}) => {
    return(
        <TypographyMain fontSize={fontSize}>
            {product.name}
        </TypographyMain>
    )
}

export default ProductCartName