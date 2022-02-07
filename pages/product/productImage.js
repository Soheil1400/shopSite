import {Box, Grid} from "@mui/material";
import Image from "next/image";
import {PaperCustom} from "../../style/style";

const ProductImage = ({product,px=8 ,md=0} ) =>{
    return(
        <Grid item xs={12} sm={12} md={6}>
            <Grid container px={1}>
                <Box display={'flex'} flexDirection={'column'} margin={'auto'}>
                    <Grid px={0} mb={5}>
                        <Image src={product.images[0].image} width={'300px'} height={'300px'} alt={'head phone'}/>
                    </Grid>
                    <Grid mt={2}>
                        <Grid display={'flex'} justifyContent={'center'} container spacing={2} mb={2}>
                            {product.images.map(img => (
                                <Grid item key={img.id}>
                                    <PaperCustom sx={{width: '70px',padding:'0'}}>
                                        <Image src={img.image} alt={`${product.name}`}/>
                                    </PaperCustom>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}

export default ProductImage