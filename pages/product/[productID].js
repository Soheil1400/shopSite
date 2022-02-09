import {Grid} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import {ProductData} from "../../data/Productdata";
import ProductImage from "./productImage";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./productTabs";
import ProductSuggest from "./productSuggest";
import ProductVendor from "./productVendor";
import ProductRelatedProduct from "./productRalatedProduct";
import {BoxCustom} from "../../style/style";

const ProductID = ({product}) => {
    const matches = useMediaQuery('(min-width:400px)');
    return (
        <BoxCustom>
            <Grid container spacing={2}>
                <ProductImage product={product} margin={2}/>
                <ProductInfo product={product}/>
                <ProductTabs product={product}/>
                <ProductSuggest matches={matches}/>
                <ProductVendor/>
                <ProductRelatedProduct category={product.category}/>
            </Grid>
        </BoxCustom>
    )
}
export async function getStaticPaths() {
    return {
        paths: [
            { params: {productID: '1'} }
        ],
        fallback: 'blocking'
    };
}
export async function getStaticProps({params}) {
    const id = params.productID
    const product = ProductData.filter(p => p.id === Number(id))[0]
    return {
        props: {
            product
        },
    }
}
export default ProductID