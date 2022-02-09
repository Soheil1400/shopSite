import Image from 'next/image'
import Box from '@mui/material/Box';
import {Chip, useMediaQuery} from "@mui/material";
import styled from "@emotion/styled";
import Category1 from "../../../asset/category-1.png"
import Category2 from "../../../asset/category-2.png"
import Category3 from "../../../asset/category-3.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data =
    [
        {
            title1: "HeadPhones",
            image: Category1,
        },
        {
            title1: "watch",
            image: Category2,
        },
        {
            title1: "SunGlass",
            image: Category3,
        },
        {
            title1: "HeadPhones",
            image: Category1,
        },
        {
            title1: "watch",
            image: Category2,
        },
        {
            title1: "SunGlass",
            image: Category3,
        },

    ]

export default function Category() {
    const Query = useMediaQuery('(min-width:321px)')
    const settings = {
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    const CartBox = styled(Box)(
        {
            padding: "15px",
            borderRadius: "8px",
            backgroundColor: 'rgb(255, 255, 255)',
            boxShadow: 'rgb(3 0 71 / 9%) 0px 1px 3px',
            cursor: "pointer",
            margin: "10px",
            display: "flex!important",
            width: "auto!important",
            justifyContent: 'center',
            position: "relative"
        }
    )
    const TitlesBox = styled(Box)(
        {
            display: 'flex',
            justifyContent: "space-between",
            cursor: 'unset',
            padding: '4px 10px',
            position: 'absolute',
            width: Query === true ? "90%" : "95%",
            top: '15%',
        }
    )
    const HoverBox = styled(Box)({
        position: "absolute",
        backgroundColor: "black",
        zIndex: "1",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        opacity: "0",
        "&:hover": {opacity: ".3", transition: 'all 250ms ease-in-out 0s'}
    })

    return (
        <Box sx={{
            maxWidth: "95%",
        }}>
            <Slider {...settings}>
                {
                    data.map(item => (
                        <CartBox key={item.id} component="span">
                            <TitlesBox>
                                <Chip
                                    size={"small"}
                                    sx={{backgroundColor: 'rgb(15, 52, 96)', color: 'white', zIndex: "2"}}
                                    label={item.title1}/>
                                <Chip
                                    size={"small"}
                                    sx={{zIndex: "2", backgroundColor: 'rgb(227, 233, 239)', color: 'rgb(55, 63, 80)'}}
                                    label={"3k orders this week"}/>
                            </TitlesBox>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    position: "relative",
                                }}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.image}
                                />
                                <HoverBox>{}</HoverBox>
                            </Box>
                        </CartBox>
                    ))
                }
            </Slider>
        </Box>
    );
}