import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box, Button, Grid, Typography, useMediaQuery} from "@mui/material";
import Image from 'next/image'
import watch from "../../../asset/applewatch.png";
import styled from "@emotion/styled";
import Theme from "../../../theme/theme";

const data = [
    {
        title: "50% Of For Your First Shopping",
    }, {
        title: "50% Of For Your First Shopping",
    }, {
        title: "50% Of For Your First Shopping",
    }, {
        title: "50% Of For Your First Shopping",
    },
]
export default function SlideShow() {
    const Query = useMediaQuery("(min-width:321px)");
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 400,
        autoplaySpeed: 2500,
    }
    const InfoBox = styled(Box)({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '1rem 0px 1rem 2rem',
        width: Query === true ? '50%' : '80%',
    })
    const InfoHeader = styled(Typography)({
        fontSize: Query === true ? '4rem' : "1.5rem",
        marginTop: 0,
        marginBottom: '1.35rem',
        lineHeight: '1.2',
        color: "rgb(43, 52, 69)",
        fontWeight: "bold"
    })
    const InfoButton = styled(Button)({
        backgroundColor: Theme.palette.primary.main,
        fontWeight: '600',
        fontSize: "12px"
    })
    return (
        <Box sx={{width: "95%", maxWidth: "1200px"}}>
            <Slider {...settings}>
                {
                    data.map((item, index) => (
                        <Grid key={index} sx={{display: "flex!important", alignItems: "center"}}>
                            <InfoBox>
                                <InfoHeader>{item.title}</InfoHeader>
                                <Typography sx={{marginBottom: '1.35rem', color: 'rgb(15, 52, 96)',}}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur
                                    corporis dicta exercitationem, odit recusandae.
                                </Typography>
                                <InfoButton variant="contained">
                                    Visit Collections
                                </InfoButton>
                            </InfoBox>
                            <Grid sx={{
                                width: Query === true ? '256px' : '100px',
                                height: Query === true ? '391px' : '150px'
                            }}>
                                <Image alt="watch logo" src={watch}/>
                            </Grid>
                        </Grid>
                    ))
                }
            </Slider>
        </Box>


    );
}
