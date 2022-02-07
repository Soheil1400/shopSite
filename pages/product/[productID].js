import {Grid} from "@mui/material";
import {useEffect, useState} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {ProductData} from "../../data/Productdata";
import ProductImage from "./productImage";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./productTabs";
import ProductSuggest from "./productSuggest";
import ProductVendor from "./productVendor";
import ProductRelatedProduct from "./productRalatedProduct";
import {useRouter} from "next/router";
import HeadPhone from '../../asset/headphone.png'
import {BoxCustom} from "../../style/style";

const ProductID = () => {
    const router = useRouter()
    const [product, setProduct] = useState({
        id: 1,
        name: '',
        brand: '',
        price: 999,
        vendor: '',
        rate: 1,
        description: '',
        images: [
            {
                id: 1,
                image: HeadPhone
            },
        ],
        reviews: [
            {
                id: 1,
                review: '',
                rate: 4.7,
                name: '',
                time: ''
            }
        ]
    })
    const matches = useMediaQuery('(min-width:400px)');
    useEffect(() => {
        setProduct(ProductData[router.query.productID-1] || product)
    })
    return (
        <BoxCustom>
            <Grid container>
                <ProductImage product={product} p={4}/>
                <ProductInfo product={product}/>
                <ProductTabs product={product}/>
                <ProductSuggest matches={matches}/>
                <ProductVendor/>
                <ProductRelatedProduct category={product.category}/>
            </Grid>
        </BoxCustom>
    )
}
export default ProductID