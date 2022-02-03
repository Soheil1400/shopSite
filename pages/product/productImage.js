import {Box, Grid, Paper} from "@mui/material";
import {styled} from "@mui/material/styles";
import Image from "next/image";
import HeadPhone from "../../asset/headphone.png";

const ProductImage = ({product,p}) =>{
    const PaperCustom = styled(Paper)({
        alignItems: 'center',
        justifyContent: 'center',
        padding: '18px',
        borderRadius: '10px',
        margin: 'auto',
        boxShadow: ' rgb(3 0 71 / 9%) 0px 1px 3px',
    })
    return(
        <Grid item xs={12} sm={12} md={6}>
            <Grid container px={1} py={p}>
                <Box display={'flex'} flexDirection={'column'} margin={'auto'}>
                    <Grid item xs={12} px={8}>
                        <Image src={HeadPhone} alt={'head phone'}/>
                    </Grid>
                    <Grid item xs={12} mt={2}>
                        <Grid container spacing={1} p={3}>
                            {product.images.map(img => (
                                <Grid item xs={4} key={img.id}>
                                    <PaperCustom sx={{width: '70px'}}>
                                        <Image src={HeadPhone} alt={'head phone'}/>
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