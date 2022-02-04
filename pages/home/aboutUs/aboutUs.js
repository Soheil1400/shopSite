import {Grid, Paper, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import Theme from "../../../theme/theme";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentsIcon from '@mui/icons-material/Payments';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import {useState} from "react";

const AboutUs = () => {
    const [about,setAbout] = useState([
        {
            id:1,
            title:'Worldwide Delivery',
            describe:'We offer competitive prices on our 100 million plus product any range.',
            icon:<LocalShippingIcon color={'secondary'} fontSize={'large'}/>
        },
        {
            id:2,
            title:'Safe Payment',
            describe:'We offer competitive prices on our 100 million plus product any range.',
            icon:<PaymentsIcon color={'secondary'} fontSize={'large'}/>
        },
        {
            id:3,
            title:'Shop With Confidence',
            describe:'We offer competitive prices on our 100 million plus product any range.',
            icon:<GppGoodOutlinedIcon color={'secondary'} fontSize={'large'}/>
        },
        {
            id:4,
            title:'24/7 Support',
            describe:'We offer competitive prices on our 100 million plus product any range.',
            icon:<HeadsetMicOutlinedIcon color={'secondary'} fontSize={'large'}/>
        },
    ])
    const PaperCustom = styled(Paper)({
        alignItems: 'center',
        justifyContent: 'center',
        padding: '18px',
        borderRadius: '10px',
        margin: 'auto',
        boxShadow: ' rgb(3 0 71 / 9%) 0px 1px 3px',
        cursor: 'pointer',
        '&:hover': {
            boxShadow: 'rgb(3 0 71 / 9%) 0px 8px 45px'
        }
    })
    const TypographyMain = styled(Typography)({
        color: Theme.palette.secondary.dark
    })
    const TypographyGray = styled(Typography)({
        color: Theme.palette.secondary.light
    })
    const iconStyle = {
        width: '60px',
        height: '60px',
        backgroundColor: '#F3F5F9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        borderRadius: '60%'

    }
    return (
        <Grid container spacing={3} my={4}>
            {about.map(a =>(
                <Grid item xs={12} md={6} lg={3} key={a.id}>
                    <PaperCustom>
                        <Grid p={3.3} display={'flex'} flexDirection={'column'} textAlign={'center'}>
                            <Grid style={iconStyle}>
                                {a.icon}
                            </Grid>
                            <Grid my={2}>
                                <TypographyMain fontWeight={'bold'} fontSize={'17px'}>
                                    {a.title}
                                </TypographyMain>
                            </Grid>
                            <Grid>
                                <TypographyGray>
                                    {a.describe}
                                </TypographyGray>
                            </Grid>
                        </Grid>
                    </PaperCustom>
                </Grid>
            ))}
        </Grid>
    )
}

export default AboutUs