import Title from '../../pages/home/title/title';
import {styled} from '@mui/material/styles';
import { Typography ,Grid } from '@mui/material';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import Image1 from '../../asset/products/gadget/atech cam 1080.png';
import { useState } from 'react';
import Image from 'next/image';
import theme from '../../theme/theme';
const GridCustom = styled(Grid)({
    alignItems: 'left',
    justifyContent: 'left',
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
const Newarrival=()=>{
    const [arrival,setArrival]=useState([
        {id:'1',image:Image1,title:'Sunglass',price:150},
        {id:'2',image:Image1,title:'Makeup',price:250},
        {id:'3',image:Image1,title:'Smart Watch',price:350},
        {id:'4',image:Image1,title:'Lipstick',price:15},
        {id:'5',image:Image1,title:'Green Plant',price:55},
        {id:'6',image:Image1,title:'Bonsai tree',price:535},
    ])
    return(
        <Grid container>
            <Title title={'New Arrival'} icon={<NewReleasesIcon/>}/>
            <GridCustom container>
             {arrival.map((item)=>(
                   <Grid key={item.id} item xs={6} sm={4} md={3} lg={2} >
                            <Grid display={'flex'} alignItems={'left'} flexDirection={'column'} >
                                <Grid >
                                    <StyledImage src={item.image} alt={item.title}  />
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
      
    )
}
export default Newarrival;