import Title from '../../pages/home/title/title';
import Rating from '@mui/material/Rating';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import {styled} from '@mui/material/styles';
import { Typography ,Grid } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
import theme from '../../theme/theme';
import Image1 from '../../asset/topRating/camera.png';
import Image2 from '../../asset/topRating/mobile.png';
import Image3 from '../../asset/topRating/shoes.png';
import Image4 from '../../asset/topRating/watch.png';
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
const TopRating = () => {
    const [topRating,setTopRating]=useState([
        {id:'1',image:Image1,rating:'4',title:'Camera',price:3300},
        {id:'2',image:Image2,rating:'4.5',title:'Shoe',price:400},
        {id:'3',image:Image3,rating:'5',title:'Phone',price:999},
        {id:'4',image:Image4,rating:'5',title:'Watch',price:999},
    ]
    )
    return ( 
       <Grid container width={'50%'}>
          <Title title={'Top Ratings'} icon={<MilitaryTechIcon/>}/>
          <GridCustom container>
             {topRating.map((item)=>(
                   <Grid key={item.id} item xs={6} sm={6} md={3} lg={3} >
                            <Grid display={'flex'} alignItems={'center'} flexDirection={'column'} >
                                <Grid >
                                    <StyledImage src={item.image} alt={item.title}  />
                                </Grid>
                                <Grid>
                                   <Rating name="read-only" value={item.rating} readOnly precision={0.5}/>
                                </Grid>
                                <Grid>
                                    <Typography fontWeight={'600'} color={theme.palette.secondary.dark}>
                                        {item.title}
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <Typography fontWeight={'600'} color={theme.palette.primary.main}>
                                        ${item.price}
                                    </Typography>
                                </Grid>
                            </Grid>
                  </Grid>
             ))}
            </GridCustom>
       </Grid>    
     );
}
 
export default TopRating;