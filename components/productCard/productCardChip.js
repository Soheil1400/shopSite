import {Chip, Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import Theme from "../../theme/theme";

const ProductCardChip = ({product}) =>{
    const ChipCustom = styled(Chip)({
        backgroundColor: Theme.palette.primary.main,
        color: Theme.palette.primary.light,
        textAlign: 'center',
        borderRadius: '300px',
        fontSize: '12px',
    })
    return(
        <Grid>
            {product.sale === true ? <ChipCustom label={`${product.MSale}% off`}/> :
                <ChipCustom label={`0% off`}/>}
        </Grid>
    )
}

export default ProductCardChip