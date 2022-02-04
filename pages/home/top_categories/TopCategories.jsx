import Box from '@mui/material/Box';
import Image from 'next/image'
import Category1 from "../../../asset/category-1.png"
import Category2 from "../../../asset/category-2.png"
import Category3 from "../../../asset/category-3.png"
import CategoryIcon from '@mui/icons-material/Category';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Typography} from "@mui/material";


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


export default function Category() {
    return (
        <   Box style={{
            maxWidth: "1200px",
        }}>

            <Box style={{
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
                        <Box key={item.id} component="span" sx={{
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

                        }}>

                            <Box sx={{
                                display: 'flex',
                                justifyContent: "space-between",
                                cursor: 'unset',
                                padding: '4px 10px',
                                position: 'absolute',
                                zIndex: '1',
                                width: '340px',
                            }}>
                                <Typography sx={{
                                    backgroundColor: 'rgb(15, 52, 96)',
                                    color: 'white',
                                    padding: "4px 10px",
                                    borderRadius: "300px",
                                    fontWeight: '600',
                                    fontSize: '10px',
                                }}>{item.title1}</Typography>

                                <Typography sx={{
                                    backgroundColor: 'rgb(227, 233, 239)',
                                    color: 'rgb(55, 63, 80)',
                                    padding: "4px 10px",
                                    borderRadius: "300px",
                                    fontWeight: '600',
                                    fontSize: '10px',
                                }}>3k orders this week</Typography>
                            </Box>

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
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
                                    "&:hover": {opacity: ".2", transition: 'all 250ms ease-in-out 0s'}
                                }}>{}</Box>

                            </Box>

                        </Box>
                    ))
                }
            </Slider>

        </Box>


    );
}