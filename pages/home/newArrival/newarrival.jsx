import Title from '../title/title';
import {Grid} from '@mui/material';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import CartItem from '../topRatingAndFeature/CartItem';
import {PaperCustom} from "../../../style/style";
import {arrival} from "../../../data/arrival";

const NewArrival = () =>{
    return(
        <Grid my={3}>
            <Title title={'New Arrival'} icon={<NewReleasesIcon/>}/>
            <PaperCustom>
                <Grid container spacing={3}>
                    {arrival.map((item)=>(
                        <Grid  item  key={item.id} xs={6} sm={6} md={3} lg={2}>
                            <CartItem image={item.image} title={item.title}  price={item.price} display={'none'} alignItem={'left'}/>
                        </Grid>
                    ))}
                </Grid>
            </PaperCustom>
        </Grid>
      
    )
}
export default NewArrival;