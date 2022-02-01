import {styled} from "@mui/material/styles";
import {Box, Grid} from "@mui/material";
import {useEffect, useState} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {Data} from "../../data/data";
import ProductImage from "./productImage";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./productTabs";
import ProductSuggest from "./productSuggest";
import ProductVendor from "./productVendor";
import ProductRelatedProduct from "./productRalatedProduct";

const ProductID = () => {
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
                image: ''
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
    const BoxCustom = styled(Box)({
        display: 'flex',
        flexDirection: 'column',
        padding: '12px',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1200px',
        margin: 'auto'
    })
    useEffect(() => {
        setProduct(Data[0])
    })
    return (
        <BoxCustom>
            <Grid container>
                <ProductImage product={product}/>
                <ProductInfo product={product}/>
                <ProductTabs product={product}/>
                <ProductSuggest matches={matches}/>
                <ProductVendor/>
                <ProductRelatedProduct/>
            </Grid>
        </BoxCustom>
    )
}
export default ProductID