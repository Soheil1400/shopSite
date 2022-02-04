import Title from "../title/title";
import {ProductData} from "../../../data/Productdata";
import ProductCard from "../../../components/productCard/productCard";
import {Grid} from "@mui/material";

const MadeForYou = () =>{
    return(
        <Grid my={3}>
            <Title/>
            <Grid container spacing={3}>
                    {ProductData.map(product =>(
                        <ProductCard product={product} key={product.id}/>
                    ))}
            </Grid>
        </Grid>
    )
}

export default MadeForYou