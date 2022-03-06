import { Grid } from '@mui/material';
import TopRating from './topRating';
import FeatureBrand from './featureBrand';

const RatingAndFeature = () => {
    return ( 
        <Grid container spacing={3} my={3}>
            <Grid item xs={12} sm={12} md={12} lg={6} >
                <TopRating/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} >
                <FeatureBrand/>
            </Grid>
        </Grid>
     );
}
export default RatingAndFeature;