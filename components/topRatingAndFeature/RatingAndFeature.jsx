import { Grid } from '@mui/material';
import TopRating from './topRating';
import FeatureBrand from './featureBrand';
const RatingAndFeature = () => {
    return ( 
        <Grid container columns={{ xs: 1, sm: 1, md: 1,lg:2 }}>
           <Grid item  xs={12} sm={12} md={12} lg={2}>
               <TopRating/>
               <FeatureBrand/>
           </Grid>
        </Grid>
     );
}

 
export default RatingAndFeature;