import {Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import Theme from "../../theme/theme";

const ProductTabsInfo = ({product}) =>{
    const TypographyMain = styled(Typography)({
        color: Theme.palette.secondary.dark
    })
    return(
        <>
            <TypographyMain my={2} fontSize={'20px'} fontWeight={'bold'}>
                Specification:
            </TypographyMain>
            <TypographyMain>
                {product.description}
            </TypographyMain>
        </>
    )
}

export default ProductTabsInfo