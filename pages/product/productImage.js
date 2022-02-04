import {Box, Grid, Paper} from "@mui/material";
import {styled} from "@mui/material/styles";
import Image from "next/image";
import Theme from "../../theme/theme";

const ProductImage = ({product,px=8 ,md=0} ) =>{
    const PaperCustom = styled(Paper)({
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1px',
        borderRadius: '10px',
        margin: 'auto',
        boxShadow: ' rgb(3 0 71 / 9%) 0px 1px 3px',
        border: `1px solid ${Theme.palette.primary.main}`,
        cursor:'pointer'
    })
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
                                    <PaperCustom sx={{width: '70px'}}>
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