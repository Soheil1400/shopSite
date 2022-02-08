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
    initialSlide: 0,
    responsive:[
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        }
    ]
}

export const FlashDeal = () => {
    return (

            <Box sx={{
                maxWidth: "1200px",
            }}>
                <Title title={"Flash Deals"} icon={<BoltIcon/>}/>
                <Slider {...settings}>
                        {ProductData.map(product => (
                            <ProductCard product={product} key={product.id}/>
                        ))}
                </Slider>

           </Box>



    );
}