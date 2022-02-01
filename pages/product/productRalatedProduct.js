import {Grid, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import Theme from "../../theme/theme";

const ProductRelatedProduct = () =>{
    const TypographyMain = styled(Typography)({
        color: Theme.palette.secondary.dark
    })
    return(
        <Grid item xs={12} my={2}>
            <TypographyMain mb={3} fontWeight={'bold'} fontSize={'20px'}>
                Related Products
            </TypographyMain>
        </Grid>
    )
}

export default ProductRelatedProduct