import Title from '../title/title';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import {Grid} from '@mui/material';
import CartItem from './CartItem';
import useMediaQuery from "@mui/material/useMediaQuery";
import {PaperCustom} from "../../../style/style";
import {featureBrand} from "../../../data/featureBrand";

const FeatureBrand = () => {
    const matches = useMediaQuery('(min-width:770px)')
    return ( 
        <Grid container >
        <Title title={'Feature Brands'} icon={<StarPurple500Icon/>}/>
        <PaperCustom>
            <Grid container spacing={3}>
            {featureBrand.map((item)=>(
                 <Grid key={item.id} item  xs={12} sm={6} md={6} lg={6}>
                     <CartItem image={item.image} title={item.title} w={matches === true ? 250 : 400} h={matches === true ? 175 : 250}  display={'none'} alignItem={'left'}/>
                </Grid>
           ))}
            </Grid>
          </PaperCustom>
     </Grid>    
     );
}
 
export default FeatureBrand;