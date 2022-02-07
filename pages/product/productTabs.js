import {Box,Grid} from "@mui/material";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {useState} from "react";
import ProductTabsInfo from "./productTabsInfo";
import ProductTabsReviews from "./productTabsReviews";
import ProductTabsAddReview from "./productTabsAddReview";
import {CustomTab} from "../../style/style";

const ProductTabs = ({product}) => {
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box width={'100%'}>
                <TabContext value={value}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <TabList textColor="primary" indicatorColor="primary" onChange={handleChange}
                                 aria-label="lab API tabs example">
                            <CustomTab label="Description" value="1"/>
                            <CustomTab label={`Review (${product.reviews.length})`} value="2"/>
                        </TabList>
                    </Box>
                    <TabPanel value="1" sx={{padding: '5px 0', margin: '2rem 0'}}>
                        <ProductTabsInfo product={product}/>
                    </TabPanel>
                    <TabPanel value="2" sx={{padding: '0', margin: '2rem 0'}}>
                        <ProductTabsReviews product={product}/>
                        <ProductTabsAddReview/>
                    </TabPanel>
                </TabContext>
            </Box>
        </Grid>
    )
}

export default ProductTabs