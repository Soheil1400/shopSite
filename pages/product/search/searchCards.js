import {Grid} from "@mui/material";
import ProductCard from "../../../components/productCard/productCard";

const SearchCards = ({categoryData}) => {
    return(
        <Grid item xs={12} lg={9}>
            <Grid container spacing={3}>
                {categoryData.map(p => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={p.id}>
                        <ProductCard product={p}/>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default SearchCards