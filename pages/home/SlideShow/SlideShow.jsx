import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box, Button, Typography} from "@mui/material";
import Image from 'next/image'
import watch from "../../../asset/applewatch.png";
import styled from "@emotion/styled";
import Theme from "../../../theme/theme";

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

const InfoBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '1rem 0px 1rem 2rem',
    width: '700px'
})
const InfoHeader = styled(Typography)({
    fontSize: '4rem',
    marginTop: 0,
    marginBottom: '1.35rem',
    lineHeight: '1.2',
    color:"rgb(43, 52, 69)",
    fontWeight:"bold"
})
const InfoButton = styled(Button)({
    backgroundColor:Theme.palette.primary.main,
    fontWeight: '600',
    fontSize:"12px"
})

export default function SlideShow() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 400,
        autoplaySpeed: 2500,
    }

    return (

        <Box sx={{marginLeft:"340px"}}>

            <Slider {...settings}>
                {
                    data.map((item,index) => (
                        <Box key={index} sx={{display:"flex!important"}}>

                            <InfoBox>
                                <InfoHeader>{item.title}</InfoHeader>
                                <Typography sx={{marginBottom: '1.35rem', color: 'rgb(15, 52, 96)',}}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur corporis dicta exercitationem, odit recusandae.
                                </Typography>
                                <InfoButton variant="contained">
                                    Visit Collections
                                </InfoButton>
                            </InfoBox>


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
