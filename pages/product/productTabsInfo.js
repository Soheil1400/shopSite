import {TypographyMain} from "../../style/style";

const ProductTabsInfo = ({product}) =>{
    return(
        <>
            <TypographyMain my={2} fontSize={'20px'} fontWeight={'bold'}>
                Specification:
            </TypographyMain>
            <TypographyMain>
                {product.description}
            </TypographyMain>
        </>
    )
}

export default ProductTabsInfo