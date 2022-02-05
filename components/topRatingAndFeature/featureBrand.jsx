import Title from '../../pages/home/title/title';
import Rating from '@mui/material/Rating';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import {styled} from '@mui/material/styles';
import { Typography ,Grid } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
import theme from '../../theme/theme';
import Image1 from '../../asset/featureBrand/london-britches.png';
import Image2 from '../../asset/featureBrand/jim and jiko.png';
const GridCustom = styled(Grid)({
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor:'white',
    borderRadius: '10px',
    margin: 'auto',
    boxShadow: ' rgb(3 0 71 / 9%) 0px 1px 3px',
    '&:hover': {
        boxShadow: 'rgb(3 0 71 / 9%) 0px 8px 45px'
    }
})
const StyledImage=styled(Image)({
    cursor:'pointer',
    borderRadius: '10px',
    opacity:'1',
    '&:hover': {
       backgroundColor:'gray',
       opacity:'0.3'
    }
})
const FeatureBrand = () => {
        const [FeatureBrand,setFeatureBrand]=useState([
            {id:'1',image:Image1,title:'London Britches'},
            {id:'2',image:Image2,title:'Jim & Jago'},
        ]
        )
    return ( 
        <Grid container width={'50%'}>
        <Title title={'Feature Brands'} icon={<StarPurple500Icon/>}/>
        <GridCustom container>
           {FeatureBrand.map((item)=>(
                 <Grid key={item.id} item  >
                          <Grid display={'flex'} alignItems={'left'} flexDirection={'column'} >
                              <Grid >
                                  <StyledImage src={item.image} alt={item.title}  />
                              </Grid>
                              <Grid>
                                  <Typography fontWeight={'600'} color={theme.palette.secondary.dark}>
                                      {item.title}
                                  </Typography>
                              </Grid>
                          </Grid>
                </Grid>
           ))}
          </GridCustom>
     </Grid>    
     );
}
 
export default FeatureBrand;