import ProductCard from "../../../components/productCard/productCard";
import {ProductData} from "../../../data/Productdata";
import Box from '@mui/material/Box';
import {Grid} from "@mui/material";
import BoltIcon from '@mui/icons-material/Bolt';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../title/title";


const settings = {
    infinite: false,
    slidesToShow: 4,
    swipeToSlide: true,
}

export const FlashDeal = () => {
    return (
        <Box sx={{
            maxWidth: "1200px",
        }}>
            <Title title={"Flash Deals"} icon={<BoltIcon/>}/>
            <Slider {...settings}>

                {ProductData.map(product => (
                    <Grid item xs={12} sm={12} md={4} lg={11} key={product.id}>
                        <ProductCard product={product} key={product.id}/>
                    </Grid>
                ))}

            </Slider>

        </Box>


    );
}