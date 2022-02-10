import Title from '../../pages/home/title/title';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import {styled} from '@mui/material/styles';
import { Typography ,Grid,Paper } from '@mui/material';
import { useState } from 'react';
import Image1 from '../../asset/featureBrand/london-britches.png';
import Image2 from '../../asset/featureBrand/jim and jiko.png';
import CartItem from './CartItem';
import useMediaQuery from "@mui/material/useMediaQuery";
const PaperCustom = styled(Paper)({
    alignItems: 'center',
    justifyContent: 'center',
    padding: '18px',
    borderRadius: '10px',
    margin: 'auto',
    boxShadow: ' rgb(3 0 71 / 9%) 0px 1px 3px',
    cursor: 'pointer',

})
const FeatureBrand = () => {
    const matches = useMediaQuery('(min-width:770)')
        const FeatureBrand = [
            {id:'1',image:Image1,title:'London Britches'},
            {id:'2',image:Image2,title:'Jim & Jago'},
        ]
    return ( 
        <Grid container >
        <Title title={'Feature Brands'} icon={<StarPurple500Icon/>}/>
        <PaperCustom>
            <Grid container spacing={3}>
            {FeatureBrand.map((item)=>(
                 <Grid key={item.id} item  xs={12} sm={6} md={6} lg={6}>
                     <CartItem image={item.image} title={item.title} w={matches === true ? 250 : 400} h={matches === true ? 165 : 250}  display={'none'} alignItem={'left'}/>
                </Grid>
           ))}
            </Grid>
          </PaperCustom>
     </Grid>    
     );
}
 
export default FeatureBrand;