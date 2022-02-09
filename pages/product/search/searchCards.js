import {Grid} from "@mui/material";
import ProductCard from "../../../components/productCard/productCard";

const SearchCards = ({categoryData,filter}) => {
    return(
        <Grid item xs={12} lg={9}>
            <Grid container spacing={3}>
                {filter.price === 'Relevance'  ||  filter.price === 'Date'?
                    categoryData.sort((firstItem, secondItem) => firstItem.id - secondItem.id).filter(p => p.price > filter.min && p.price < filter.max).map(p => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={p.id}>
                        <ProductCard product={p}/>
                    </Grid>))
                    :
                     filter.price === 'Price Low to High' ? categoryData.sort((firstItem, secondItem) => firstItem.price - secondItem.price).filter(p => p.price > filter.min && p.price < filter.max).map(p => (
                        <Grid item xs={12} sm={6} md={4} lg={4} key={p.id}>
                            <ProductCard product={p}/>
                        </Grid>)) : filter.price === 'Price High to Low' ?
                         categoryData.sort((firstItem, secondItem) => secondItem.price - firstItem.price).filter(p => p.price > filter.min && p.price < filter.max).map(p => (
                             <Grid item xs={12} sm={6} md={4} lg={4} key={p.id}>
                                 <ProductCard product={p}/>
                             </Grid>)) : ''}
            </Grid>
        </Grid>
    )
}

export default SearchCards