import Link from "next/link";
import {Grid} from "@mui/material";
import {forwardRef} from "react";
import Image from "next/image";

const ProductCartImage = ({product}) => {
    const SelectedProduct = forwardRef(({onClick, href}, ref) => {
        return (
            <a href={href} onClick={onClick} ref={ref}>
                <Image alt={product.title} src={product.images[0].image}/>
            </a>
        )
    })
    return(
        <Grid display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
            <Link href={`/product/${encodeURIComponent(product.id)}`}>
                <SelectedProduct>
                </SelectedProduct>
            </Link>
        </Grid>
    )
}

export default ProductCartImage