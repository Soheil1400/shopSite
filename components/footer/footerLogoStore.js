import {Box, Grid, Typography} from "@mui/material";
import Image from "next/image";
import GooglePlay from "../../asset/general/playstore (1).png";
import AppStore from "../../asset/general/app-store (1).png";
import {styled} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const FooterLogoStore = () => {
    const matchesAppStore = useMediaQuery('(min-width:650px)');
    const store = [
        {
            id:1,
            title1:'Get it on',
            title2:'Google Play',
            logo:<Image src={GooglePlay} alt={'play-store'}/>
        },
        {
            id:2,
            title1:'Download on it',
            title2:'App Store',
            logo:<Image src={AppStore} alt={'app-store'}/>
        },
    ]
    const CustomBoxApp = styled(Box)({
        width: matchesAppStore === true ? '38%' : '60%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#0C2A4D',
        padding: '8px 8px',
        margin: '0.5rem',
        borderRadius: '5px',
        cursor: 'pointer'
    })
    return(
        <Box display={'flex'} sx={{flexDirection: matchesAppStore === true ? 'row' : 'column'}}>
            {store.map(s => (
                <CustomBoxApp key={s.id}>
                    <Grid>
                        {s.logo}
                    </Grid>
                    <Grid lineHeight={0}>
                        <Grid>
                            <Typography fontSize={'8px'}>
                                {s.title1}
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography fontWeight={'bold'}>
                                {s.title2}
                            </Typography>
                        </Grid>
                    </Grid>
                </CustomBoxApp>
            ))}
        </Box>
    )
}

export default FooterLogoStore