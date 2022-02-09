import {TypographyMain} from "../../style/style";

const ProductCartNumber = ({product,items}) => {
    return(
        <TypographyMain pr={1}>
            {items.filter(i => i.id === product.id).length === 0 ? '' : items.filter(i => i.id === product.id)[0].count}
        </TypographyMain>
    )
}

export default ProductCartNumber