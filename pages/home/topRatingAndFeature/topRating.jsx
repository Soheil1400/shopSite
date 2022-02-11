import Title from '../title/title';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import {Grid} from '@mui/material';
import {topRating} from "../../../data/topRating";
import {PaperCustom} from "../../../style/style";
import CartItem from './CartItem';

const TopRating = () => {
    return ( 
       <Grid container>
          <Title title={'Top Ratings'} icon={<MilitaryTechIcon/>}/>
           <PaperCustom>
               <Grid container spacing={3}>
               {topRating.map((item)=>(
                   <Grid key={item.id} item xs={6} sm={6} md={3} lg={3}>
                       <CartItem image={item.image} title={item.title} rating={item.rating} price={item.price} total={item.total} display={'block'} alignItem={'center'}/>
                  </Grid>
               ))}
                </Grid>
            </ PaperCustom>
       </Grid>    
     );
}
 
export default TopRating;