import {Box, Grid} from "@mui/material";
import Image from "next/image";
import {PaperCustom} from "../../style/style";
import {useState} from "react";
import Theme from "../../theme/theme";

const ProductImage = ({product,px=8 ,margin=4,mt=0} ) =>{
    const [bigImage,setBigImage] = useState(1)
    return(
        <Grid item xs={12} sm={12} md={6}>
            <Grid container px={1}>
                <Box display={'flex'} flexDirection={'column'} margin={'auto'}>
                    <Grid px={0} mt={mt}>
                        <Image src={product.images[bigImage-1].image} width={'350px'} height={'350px'} alt={'head phone'}/>
                    </Grid>
                    <Grid mt={margin}>
                        <Grid display={'flex'} justifyContent={'center'} container spacing={2} mb={2}>
                            {product.images.map(img => (
                                <Grid item key={img.id}>
                                    <PaperCustom sx={{width: '70px',padding:'0',border:img.id === bigImage ? `1px solid ${Theme.palette.primary.main}` : '',cursor:'pointer'}}>
                                        <Image src={img.image} alt={`${product.name}`} onClick={()=>setBigImage(img.id)}/>
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