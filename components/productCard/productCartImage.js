import Link from "next/link";
import {styled} from "@mui/material/styles";
import {Grid} from "@mui/material";
import {forwardRef} from "react";
import Image from "next/image";

const ProductCartImage = ({product}) => {
    const SelectedProduct = forwardRef(({onClick, href}, ref) => {
        return (
            <a href={href} onClick={onClick} ref={ref}>
                <Image src={product.images[0].image}/>
            </a>
        )
    })
    const GridSpaceBetween = styled(Grid)({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    })
    return(
        <GridSpaceBetween>
            <Link href={`/product/${encodeURIComponent(product.id)}`}>
                <SelectedProduct>
                </SelectedProduct>
            </Link>
        </GridSpaceBetween>
    )
}

export default ProductCartImage