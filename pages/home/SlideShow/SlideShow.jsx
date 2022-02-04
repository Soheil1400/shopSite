import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box, Button, Typography} from "@mui/material";
import Image from 'next/image'
import watch from "../../../asset/applewatch.png";


const data=[
    {
        title:"50% Of For Your First Shopping",
    },{
        title:"50% Of For Your First Shopping",
    },{
        title:"50% Of For Your First Shopping",
    },{
        title:"50% Of For Your First Shopping",
    },
]


export default function SlideShow() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 400,
        autoplaySpeed: 2500,
        cssEase: "linear",
        appendDots: dots => (
            <div
                style={{
                    borderRadius: "10px",
                }}
            >
                {dots}
            </div>
        ),
    }

    return (

        <Box sx={{marginLeft:"280px"}}>

            <Slider {...settings}>
                {
                    data.map((item,index) => (
                        <Box key={index} sx={{display:"flex!important"}}>

                            <Box sx={
                                {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                }
                            } >
                                <h1 style={{
                                    fontSize: '4rem',
                                    marginTop: 0,
                                    marginBottom: '1.35rem',
                                    lineHeight: '1.2',
                                    color:"rgb(43, 52, 69)"
                                }}>{item.title}</h1>
                                <Typography sx={{marginBottom: '1.35rem', color: 'rgb(15, 52, 96)',}}>
                                    Lorem ipsum dolor sit amet, consectetur . Dosadsadsadassadasdasdlorem iure, natus nesciunt odit quidem tenetur.
                                </Typography>
                                <Button variant="contained" color="error">
                                    Visit Collections
                                </Button>
                            </Box>


                            <Box>
                                <Image alt="watch logo" src={watch} width={256} height={391}/>
                            </Box>

                        </Box>
                    ))
                }


            </Slider>

        </Box>


    );
}
