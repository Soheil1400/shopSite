import {Grid} from "@mui/material";
import ProductCard from "../../components/productCard/productCard";
import HorizontalProductCard from "../../components/productCard/horizontalProductCard";

const SearchCards = ({categoryData, filter, card}) => {
    return (
        <Grid item xs={12} lg={9}>
            <Grid container spacing={3}>
                {filter.price === 'Relevance' || filter.price === 'Date' ?
                    categoryData.sort((firstItem, secondItem) => firstItem.id - secondItem.id).filter(p => (p.sale === true ? (p.price * (100 - p.MSale)) / 100 : p.price) > filter.min && p.price < filter.max).map(p => (
                        <Grid key={p.id} item xs={12} sm={card === 'vertical' ? 6 : 12}
                              md={card === 'vertical' ? 4 : 12}>
                            {card === 'vertical' ?
                                <ProductCard product={p} hover={false}/>
                                :
                                <HorizontalProductCard product={p}/>
                            }
                        </Grid>
                    ))
                    :
                    filter.price === 'Price Low to High' ? categoryData.sort((firstItem, secondItem) => firstItem.price - secondItem.price).filter(p => (p.sale === true ? (p.price * (100 - p.MSale)) / 100 : p.price) > filter.min && (p.sale === true ? (p.price * (100 - p.MSale)) / 100 : p.price) < filter.max).map(p => (
                            <Grid key={p.id} item xs={12} sm={card === 'vertical' ? 6 : 12}
                                  md={card === 'vertical' ? 4 : 12}>
                                {card === 'vertical' ?
                                    <ProductCard product={p}/>
                                    :
                                    <HorizontalProductCard product={p} hover={false}/>
                                }
                            </Grid>))
                        :
                        filter.price === 'Price High to Low' ?
                            categoryData.sort((firstItem, secondItem) => secondItem.price - firstItem.price).filter(p => (p.sale === true ? (p.price * (100 - p.MSale)) / 100 : p.price) > filter.min && (p.sale === true ? (p.price * (100 - p.MSale)) / 100 : p.price) < filter.max).map(p => (
                                <Grid key={p.id} item xs={12} sm={card === 'vertical' ? 6 : 12}
                                      md={card === 'vertical' ? 4 : 12}>
                                    {card === 'vertical' ?
                                        <ProductCard product={p} hover={false}/>
                                        :
                                        <HorizontalProductCard product={p}/>
                                    }</Grid>)) : ''}
            </Grid>
        </Grid>
    )
}

export default SearchCards