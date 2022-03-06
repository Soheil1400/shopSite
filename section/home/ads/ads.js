import {Grid} from "@mui/material";
import Ads1 from '../../../asset/ads/ads1.png'
import Ads2 from '../../../asset/ads/ads2.png'
import Image from 'next/image'
import useMediaQuery from "@mui/material/useMediaQuery";

const Ads = () => {
    const matches = useMediaQuery('(min-width:770px)');
    return (
        <Grid container my={3}>
            <Grid item xs={12} md={4} p={1}>
                <Image width={matches === true ? '' : 744} src={Ads1}/>
            </Grid>
            <Grid item xs={12} md={8} p={1}>
                <Image src={Ads2}/>
            </Grid>
        </Grid>
    )
}

export default Ads