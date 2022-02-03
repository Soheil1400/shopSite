import {Box, Grid, Typography} from "@mui/material";
import Image from "next/image";
import GooglePlay from "../../asset/general/playstore (1).png";
import AppStore from "../../asset/general/app-store (1).png";
import {styled} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const FooterLogoStore = () => {
    const matchesAppStore = useMediaQuery('(min-width:650px)');
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
                        <Typography fontWeight={'bold'}>
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
                        <Typography fontWeight={'bold'}>
                            App Store
                        </Typography>
                    </Grid>
                </Grid>
            </CustomBoxApp>
        </Box>
    )
}

export default FooterLogoStore