import Title from '../../pages/home/title/title';
import {styled} from '@mui/material/styles';
import { Grid ,Paper} from '@mui/material';
import useMediaQuery from "@mui/material/useMediaQuery";
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import Image2 from '../../asset/newArrival/bgwatch.png';
import Image1 from '../../asset/newArrival/imagegoggles.png';
import Image3 from '../../asset/newArrival/lipstick.png';
import Image4 from '../../asset/newArrival/lipstick2.png';
import Image5 from '../../asset/newArrival/plant.png';
import Image6 from '../../asset/newArrival/tree.png';
import { useState } from 'react';
import CartItem from '../topRatingAndFeature/CartItem';
const PaperCustom = styled(Paper)({
    alignItems: 'left',
    justifyContent: 'left',
    backgroundColor:'white',
    borderRadius: '10px',
    margin: 'auto',
})
const Newarrival=()=>{
    const [arrival,setArrival]=useState([
        {id:'1',image:Image1,title:'Sunglass',price:'$150'},
        {id:'2',image:Image2,title:'Makeup',price:'$250'},
        {id:'3',image:Image3,title:'Smart Watch',price:'$350'},
        {id:'4',image:Image4,title:'Lipstick',price:'$15'},
        {id:'5',image:Image5,title:'Green Plant',price:'$55'},
        {id:'6',image:Image6,title:'Bonsai tree',price:'$535'},
    ])
    return(
        <Grid>
            <Title title={'New Arrival'} icon={<NewReleasesIcon/>}/>
            <PaperCustom >
                <Grid container>
                    {arrival.map((item)=>(
                        <Grid  item  key={item.id} xs={6} sm={4} md={3} lg={2}>
                            <CartItem image={item.image} title={item.title}  price={item.price} display={'none'} alignItem={'left'}/>
                        </Grid>
                    ))}
                </Grid>

            </PaperCustom>
        </Grid>
      
    )
}
export default Newarrival;