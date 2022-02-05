import Image from 'next/image'
import Box from '@mui/material/Box';
import {Typography} from "@mui/material";
import styled from "@emotion/styled";
import CategoryIcon from '@mui/icons-material/Category';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

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

const settings = {
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
}

const CartBox = styled(Box)(
    {
        minWidth: "384px",
        minHeight: "152px",
        p: 2,
        borderRadius: "8px",
        backgroundColor: 'rgb(255, 255, 255)',
        boxShadow: 'rgb(3 0 71 / 9%) 0px 1px 3px',
        cursor: "pointer",
        margin: "10px",
        display: "flex!important",
        width: "auto!important",
        justifyContent: 'center',
    }
)

const TitlesBox = styled(Box)(
    {
        display: 'flex',
        justifyContent: "space-between",
        cursor: 'unset',
        padding: '4px 10px',
        position: 'absolute',
        width: '340px',
        top: '20%',
    }
)
const Titles = styled(Typography)(
    {
        padding: "4px 10px",
        borderRadius: "300px",
        fontWeight: '600',
        fontSize: '10px',
        zIndex: '2',
    }
)

export default function Category() {
    return (
        <Box sx={{
            maxWidth: "1200px",
        }}>

            {/*injaro dast nazadam chon gharar bood hamoon default hamashoon biad roosh*/}
            <Box sx={{
                marginTop: "5px",
                display: "flex!important",
                justifyContent: "space-between",
                width: "auto!important"
            }}>
                <Box>
                    <CategoryIcon sx={{color: "rgb(233, 69, 96)"}}/>
                    <Typography style={{
                        display: "inline",
                        fontSize: '25px',
                        fontWeight: 'bold',
                        lineHeight: "1",
                        marginLeft: "5px"
                    }}>
                        Top Categories
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'rgb(125, 135, 156)',
                    cursor: "pointer"
                }}>
                    View All
                    <PlayArrowIcon sx={{
                        marginRight: '0.5rem',
                        color: 'rgb(125, 135, 156)'
                    }}/>
                </Box>
            </Box>


            <Slider {...settings}>

                {
                    data.map(item => (
                        <CartBox key={item.id} component="span">

                            <TitlesBox>
                                <Titles
                                    sx={{backgroundColor: 'rgb(15, 52, 96)', color: 'white',}}>
                                    {item.title1}
                                </Titles>

                                <Titles sx={{backgroundColor: 'rgb(227, 233, 239)', color: 'rgb(55, 63, 80)',}}>
                                    3k orders this week</Titles>
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
                                <Box sx={{
                                    position: "absolute",
                                    backgroundColor: "black",
                                    zIndex: "1",
                                    top: "0",
                                    right: "0",
                                    bottom: "0",
                                    left: "0",
                                    opacity: "0",
                                    "&:hover": {opacity: ".3", transition: 'all 250ms ease-in-out 0s'}
                                }}>{}</Box>

                            </Box>

                        </CartBox>
                    ))
                }
            </Slider>

        </Box>


    );
}