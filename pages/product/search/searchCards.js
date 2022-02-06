import {Grid} from "@mui/material";
import {ProductData} from "../../../data/Productdata";
import ProductCard from "../../../components/productCard/productCard";

const SearchCards = ({category}) => {
    return(
        <Grid item xs={12} lg={9}>
            <Grid container spacing={3}>
                {ProductData.filter(p => p.category === category).map(product => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={product.id}>
                        <ProductCard product={product}/>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default SearchCards