import { Grid } from '@mui/material';
import TopRating from './topRating';
import FeatureBrand from './featureBrand';
const RatingAndFeature = () => {
    return ( 
        <Grid container >
           <Grid item  display={'flex'} flexDirection={'row'} >
               <TopRating/>
               <FeatureBrand/>
           </Grid>
        </Grid>
     );
}

 
export default RatingAndFeature;