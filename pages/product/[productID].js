import {Grid} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import {ProductData} from "../../data/Productdata";
import ProductImage from "../../section/product/productImage";
import ProductInfo from "../../section/product/ProductInfo";
import ProductTabs from "../../section/product/productTabs";
import ProductSuggest from "../../section/product/productSuggest";
import ProductVendor from "../../section/product/productVendor";
import ProductRelatedProduct from "../../section/product/productRalatedProduct";
import {BoxCustom} from "../../style/style";

const ProductID = ({product}) => {
    const matches = useMediaQuery('(min-width:400px)');
    return (
        <BoxCustom>
            <Grid container spacing={2}>
                <ProductImage product={product} margin={0}/>
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