import {Grid} from "@mui/material";
import Brand from "./brand";
import Title from '../title/title'
import {ProductData} from "../../../data/Productdata";
import ProductCard from "../../../components/productCard/productCard";
import useMediaQuery from "@mui/material/useMediaQuery";

const Brands = ({category , title,display}) => {
    const matches = useMediaQuery('(min-width:770px)');
    return (
        <Grid container spacing={3} my={3}>
            <Grid item xs={0} md={3} display={matches === true ? 'block' : 'none'}>
                <Brand display={display}/>
            </Grid>
            <Grid item xs={12} md={9} pl={3}>
                <Title title={title} icon={''}/>
                <Grid container spacing={3}>
                    {ProductData.filter(p=> p.category === category).map(product => (
                            <Grid item xs={12} sm={6} md={4} lg={4} key={product.id}>
                                <ProductCard product={product} key={product.id}/>
                            </Grid>
                        ))}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Brands