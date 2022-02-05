import Title from '../../pages/home/title/title';
import Rating from '@mui/material/Rating';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import {styled} from '@mui/material/styles';
import { Typography ,Grid ,Paper} from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
import theme from '../../theme/theme';
import Image1 from '../../asset/topRating/camera.png';
import Image2 from '../../asset/topRating/mobile.png';
import Image3 from '../../asset/topRating/shoes.png';
import Image4 from '../../asset/topRating/watch.png';
import CartItem from './CartItem';
const GridCustom = styled(Paper)({
    display:'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor:'white',
    borderRadius: '10px',
    margin: '10px',

})

const TopRating = () => {
    const [topRating,setTopRating]=useState([
        {id:'1',image:Image1,rating:'4',title:'Camera',price:3300},
        {id:'2',image:Image2,rating:'4.5',title:'Shoe',price:400},
        {id:'3',image:Image3,rating:'5',title:'Phone',price:999},
        {id:'4',image:Image4,rating:'5',title:'Watch',price:999},
    ]
    )
    return ( 
       <Grid container p={2}>
          <Title title={'Top Ratings'} icon={<MilitaryTechIcon/>}/>
          <GridCustom >
              {topRating.map((item)=>(
                   <Grid key={item.id} item xs={6} sm={6} md={3} lg={3} pr={1}>
                            <CartItem image={item.image} title={item.title} rating={item.rating} price={item.price} display={'block'}/>
                  </Grid>
             ))}
           
             
            </GridCustom>
       </Grid>    
     );
}
 
export default TopRating;