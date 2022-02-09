import {Box, Grid} from "@mui/material";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {useEffect, useState} from "react";
import ProductTabsInfo from "./productTabsInfo";
import ProductTabsReviews from "./productTabsReviews";
import ProductTabsAddReview from "./productTabsAddReview";
import {CustomTab} from "../../style/style";

const ProductTabs = ({product}) => {
    const [value, setValue] = useState('1');
    const [reviews, setReviews] = useState([])
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(()=>{
        setReviews([{...product.reviews[0]}])
    },[product])
    console.log(reviews)
    return (
        <Grid item xs={12} sm={12} md={12} lg={12} mt={9}>
            <Box width={'100%'}>
                <TabContext value={value}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <TabList textColor="primary" indicatorColor="primary" onChange={handleChange}
                                 aria-label="lab API tabs example">
                            <CustomTab label="Description" value="1"/>
                            <CustomTab label={`Review (${reviews.length})`} value="2"/>
                        </TabList>
                    </Box>
                    <TabPanel value="1" sx={{padding: '5px 0', margin: '2rem 0'}}>
                        <ProductTabsInfo product={product}/>
                    </TabPanel>
                    <TabPanel value="2" sx={{padding: '0', margin: '2rem 0'}}>
                        <ProductTabsReviews reviews={reviews}/>
                        <ProductTabsAddReview reviews={reviews} setReviews={setReviews}/>
                    </TabPanel>
                </TabContext>
            </Box>
        </Grid>
    )
}

export default ProductTabs