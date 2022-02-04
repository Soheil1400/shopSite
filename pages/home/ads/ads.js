import {Grid} from "@mui/material";
import Ads1 from '../../../asset/ads/ads1.png'
import Ads2 from '../../../asset/ads/ads2.png'
import Image from 'next/image'

const Ads = () => {
    return(
        <Grid container my={3} spacing={3} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Grid item xs={12} md={4} p={2.1}>
                <Grid>
                    <Image height={'347.91px'} src={Ads1}/>
                </Grid>
            </Grid>
            <Grid xs={12} md={8}>
                <Grid>
                    <Image height={'325.91px'} src={Ads2}/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Ads