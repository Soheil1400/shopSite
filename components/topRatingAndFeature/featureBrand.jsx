import Title from '../../pages/home/title/title';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import {styled} from '@mui/material/styles';
import { Typography ,Grid,Paper } from '@mui/material';
import { useState } from 'react';
import Image1 from '../../asset/featureBrand/london-britches.png';
import Image2 from '../../asset/featureBrand/jim and jiko.png';
import CartItem from './CartItem';
const PaperCustom = styled(Paper)({
    display:'flex',
    flexDirection:'row',
    alignItems: 'left',
    justifyContent: 'left',
    padding: '20px',
    backgroundColor:'white',
    borderRadius: '10px',
    margin: 'auto',
})
const FeatureBrand = () => {
        const [FeatureBrand,setFeatureBrand]=useState([
            {id:'1',image:Image1,title:'London Britches'},
            {id:'2',image:Image2,title:'Jim & Jago'},
        ]
        )
    return ( 
        <Grid container >
        <Title title={'Feature Brands'} icon={<StarPurple500Icon/>}/>
        <PaperCustom>
            <Grid container>
            {FeatureBrand.map((item)=>(
                 <Grid key={item.id} item  xs={12} sm={6} md={6} lg={6}>
                     <CartItem image={item.image} title={item.title}  display={'none'} alignItem={'left'}/>
                </Grid>
           ))}
            </Grid>
          </PaperCustom>
     </Grid>    
     );
}
 
export default FeatureBrand;