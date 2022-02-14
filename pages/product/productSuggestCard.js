import {Grid} from "@mui/material";
import Image from "next/image";
import {PaperCustom} from "../../style/style";
import ProductCartPrice from "../../components/productCard/productCartPrice";
import ProductCartName from "../../components/productCard/productCartName";

const ProductSuggestCard = ({matches,product}) => {
    return (
        <Grid item xs={12} sm={3} md={2.5} lg={1.75} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <PaperCustom sx={{width: matches === true ? '100%' : '75%',cursor:'pointer'}}>
                <Grid position={'relative'} my={1}>
                    <Image src={product.images[0].image} alt={'play-store'}/>
                    <Grid position={'absolute'} top={0} right={0} left={0} bottom={0} sx={{'&:hover':{opacity:'0.3',backgroundColor:'#000',borderRadius:'5px'}}}>
                    </Grid>
                </Grid>
                <ProductCartName product={product}/>
                <ProductCartPrice product={product}/>
            </PaperCustom>
        </Grid>
    )
}

export default ProductSuggestCard