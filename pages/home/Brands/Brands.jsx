import {Grid} from "@mui/material";
import ProductCardList from "./ProductCardList/ProductCardList";
import BrandsList from "./BrandsList/BrandsList";

const Brands = () => {
    return (
        <Grid display="flex" direction="row">
            <Grid container>
                <BrandsList/>
                <ProductCardList/>
            </Grid>
        </Grid>
    );
};
export default Brands;
