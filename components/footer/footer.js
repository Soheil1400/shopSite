import {Box, Grid, Typography} from '@mui/material';
import {styled} from "@mui/material/styles";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import GoogleIcon from '@mui/icons-material/Google';
import {useState} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from 'next/image'
import Logo from '../../asset/logo.svg'
import GooglePlay from '../../asset/playstore (1).png'
import AppStore from '../../asset/app-store (1).png'

const Footer = () => {
    const matchesMenu = useMediaQuery('(min-width:1027px)');
    const matchesAppStore = useMediaQuery('(min-width:650px)');
    const [list, setList] = useState([
        {
            id: 1,
            title: 'About Us',
            items: [
                {id:1,item: 'Careers'},
                {id:2,item: 'Our Stores'},
                {id:3,item: 'Our Cares'},
                {id:4,item: 'Our Cares'},
                {id:5,item: 'Privacy Policy'}
            ]
        },
        {
            id: 2,
            title: 'Customer Care',
            items: [
                {id:1,item: 'Help Center'},
                {id:2,item: 'OHow to Buy'},
                {id:3,item: 'Track Your Order'},
                {id:4,item: 'Corporate & Bulk Purchasing'},
                {id:5,item: 'Returns & Refunds'}
            ]
        }
    ])
    const CustomBox = styled(Box)({
        backgroundColor: '#0F3460',
        padding: matchesMenu === true ? '6rem 11rem' :'5rem 2rem',
        color: '#fff',
        marginTop:'2rem'
    })
    const CustomTypography = styled(Typography)({
        color: '#A4B4BE',
        cursor: 'pointer',
        fontSize: '14px',
        '&:hover': {
            color: "#fff",
        }
    })
    const CustomTypographyNone = styled(Typography)({
        fontSize: '14px',
        color: '#A4B4BE'
    })
    const CustomBoxIcon = styled(Box)({
        display: 'inline-block',
        backgroundColor: '#0C2A4D',
        borderRadius: '50%',
        padding: '5px 5px 2px 5px' ,
        margin: '5px',
        cursor:'pointer'
    })
    const CustomBoxApp = styled(Box)({
        width: matchesAppStore === true ? '38%' : '60%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        backgroundColor:'#0C2A4D',
        padding:'8px 8px',
        margin:'0.5rem',
        borderRadius:'5px',
        cursor:'pointer'
    })
    return (
        <CustomBox>
            <Grid container>
                <Grid item xs={12} sm={6} lg={4} mb={2}>
                    <Grid>
                        <Image src={Logo} alt="logo"/>
                    </Grid>
                    <Grid mt={2} mb={1}>
                        <CustomTypographyNone>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida.
                            Sit
                            diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.
                        </CustomTypographyNone>
                    </Grid>
                    <Box sx={{display:'flex',flexDirection: matchesAppStore === true ? 'row' : 'column'}}>
                        <CustomBoxApp>
                            <Grid>
                                <Image src={GooglePlay} alt={'play-store'}/>
                            </Grid>
                            <Grid lineHeight={0}>
                                <Grid>
                                    <Typography fontSize={'8px'}>
                                        Get it on
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography fontSize={'14px'} fontWeight={'bold'}>
                                        Google Play
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CustomBoxApp>
                        <CustomBoxApp>
                            <Grid>
                                <Image src={AppStore} alt={'play-store'}/>
                            </Grid>
                            <Grid lineHeight={0}>
                                <Grid>
                                    <Typography fontSize={'8px'}>
                                        Download on it
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography fontSize={'14px'} fontWeight={'bold'}>
                                        App Store
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CustomBoxApp>
                    </Box>
                </Grid>
                {list.map(t => (
                    <Grid item xs={12} sm={6} lg={2.7} mb={2} key={t.id}>
                        <Grid mb={2}>
                            <Typography fontWeight={'bold'} variant={'h5'}>
                                {t.title}
                            </Typography>
                        </Grid>
                        {t.items.map(i => (
                            <CustomTypography p={0.5} key={`${i.id}`}>
                                {i.item}
                            </CustomTypography>
                        ))}
                    </Grid>
                ))}
                <Grid item xs={12} sm={6} lg={2.5} mb={2}>
                    <Grid mb={2}>
                        <Typography variant={'h5'}>
                            Contact US
                        </Typography>
                    </Grid>
                    <Grid mb={2}>
                        <CustomTypographyNone>
                            70 Washington Square South, New York, NY 10012, United States
                        </CustomTypographyNone>
                    </Grid>
                    <Grid mb={2}>
                        <CustomTypographyNone>
                            Email: uilib.help@gmail.com
                        </CustomTypographyNone>
                    </Grid>
                    <Grid mb={2}>
                        <CustomTypographyNone>
                            Phone: +1 1123 456 780
                        </CustomTypographyNone>
                    </Grid>
                    <Grid>
                        <CustomBoxIcon>
                            <FacebookOutlinedIcon fontSize={'small'}/>
                        </CustomBoxIcon>
                        <CustomBoxIcon>
                            <TelegramIcon fontSize={'small'}/>
                        </CustomBoxIcon>
                        <CustomBoxIcon>
                            <YouTubeIcon fontSize={'small'}/>
                        </CustomBoxIcon>
                        <CustomBoxIcon>
                            <GoogleIcon fontSize={'small'}/>
                        </CustomBoxIcon>
                        <CustomBoxIcon>
                            <InstagramIcon fontSize={'small'}/>
                        </CustomBoxIcon>
                    </Grid>
                </Grid>
            </Grid>
        </CustomBox>
    )
}

export default Footer