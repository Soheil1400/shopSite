import Title from '../../pages/home/title/title';
import {styled} from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import { Typography ,Grid ,Paper} from '@mui/material';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import Image1 from '../../asset/products/gadget/atech cam 1080.png';
import { useState } from 'react';
import Image from 'next/image';
import theme from '../../theme/theme';
import CartItem from '../topRatingAndFeature/CartItem';
const GridCustom = styled(Paper)({
    display:'flex',
    flexDirection:'row',
    alignItems: 'left',
    justifyContent: 'left',
    padding: '20px',
    backgroundColor:'white',
    borderRadius: '10px',
    margin: 'auto',
   
})

const Newarrival=()=>{
    const [arrival,setArrival]=useState([
        {id:'1',image:Image1,title:'Sunglass',price:'$150'},
        {id:'2',image:Image1,title:'Makeup',price:'$250'},
        {id:'3',image:Image1,title:'Smart Watch',price:'$350'},
        {id:'4',image:Image1,title:'Lipstick',price:'$15'},
        {id:'5',image:Image1,title:'Green Plant',price:'$55'},
        {id:'6',image:Image1,title:'Bonsai tree',price:'$535'},
    ])
    return(
        <Grid container>
            <Title title={'New Arrival'} icon={<NewReleasesIcon/>}/>
            <GridCustom >
             {arrival.map((item)=>(
                   <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} >
                        <CartItem image={item.image} title={item.title}  price={item.price} display={'none'}/>
                  </Grid>
             ))}
            </GridCustom>
        </Grid>
      
    )
}
export default Newarrival;