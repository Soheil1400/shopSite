import {Grid} from "@mui/material";
import Image from "next/image";
import {PaperCustom} from "../../style/style";
import ProductCartPrice from "../../components/productCard/productCartPrice";
import ProductCartName from "../../components/productCard/productCartName";
import Link from 'next/link'
import {forwardRef} from "react";

const ProductSuggestCard = ({matches = true,product}) => {
    const Product = forwardRef(({ onClick, href }, ref) => {
        return (
            <a href={href} onClick={onClick} ref={ref}>
                <Image src={product.images[0].image} alt={'play-store'}/>
                <Grid position={'absolute'} top={0} right={0} left={0} bottom={0} sx={{'&:hover':{opacity:'0.3',backgroundColor:'#000',borderRadius:'5px'}}}>
                </Grid>
            </a>
        )
    })
    return (
            <PaperCustom sx={{width: matches === true ? '100%' : '75%',cursor:'pointer'}}>
                <Grid position={'relative'} my={1}>
                    <Link href={`/product/${product.id}`}>
                        <Product/>
                    </Link>
                </Grid>
                <ProductCartName product={product}/>
                <ProductCartPrice product={product}/>
            </PaperCustom>
    )
}

export default ProductSuggestCard