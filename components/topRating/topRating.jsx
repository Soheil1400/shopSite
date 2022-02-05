import { experimentalStyled as styled } from '@mui/material/styles';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Theme from '../../theme/theme';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Typography } from '@mui/material';
import Image1 from '../../asset/toprating/camera.png';
import Image2 from '../../asset/toprating/mobile.png';
import Image3 from '../../asset/toprating/shoes.png';
import Image4 from '../../asset/toprating/watch.png';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Image from 'next/image';
const Item = styled(Paper)({
    textAlign: 'center',
    padding:'10px'
  });
const CustomGrid=styled(Grid)({
    display:'flex',
    alignItem:'center',
    justifyContent:'space-between'
 })
 const StyledArrowRightIcon=styled(ArrowRightIcon)({
    color:'gray',
    cursor:'pointer',
})
const StyledViewAllTypography=styled(Typography)({
    color:Theme.palette.secondary.light,
    fontSize:'1rem'
})
const StyledCategoryTypography=styled(Typography)({
    fontSize:'1.5rem',
    fontWeight:'700',
    color:Theme.palette.secondary.dark,
    marginLeft:'0.5rem'
})
const StyledGrid=styled(Grid)({
    display:'flex',
    flexDirection:'row'
});
const TopRatingList=[
    {id:'1',Image:Image1,title:'Camera',price:'$3,300',totalpeople:49,rating:2.5},
    {id:'1',Image:Image2,title:'Shoe',price:'$400',totalpeople:20,rating:5},
    {id:'1',Image:Image3,title:'Phone',price:'$999',totalpeople:65,rating:4},
    {id:'1',Image:Image4,title:'Watch',price:'$999',totalpeople:75,rating:4},
]
const TopRating = () => {
    return ( 
      
           
             <Grid style={{backgroundColor:'white',borderRadious:'30px',alignItem:'center',justifyContent:'center'}} width={'50%'}  columns={{ xs: 2, sm: 2, md: 2,lg:4 }}>
                   <Grid container style={{borderRadious:'100px',alignItem:'center',justifyContent:'center',marginTop:'1.5rem'}} xs={6} sm={6} md={6} lg={4}> 
                   {TopRatingList.map((item)=>(
                     <Grid item key={item.id} style={{display:'flex',flexDirection:'column',paddingLeft:'20px',textAlign:'center'}}>
                         <Image
                         style={{borderRadious:'10px'}}
                         padding={'100px'}
                         src={item.Image}
                         alt={item.title}
                         width={'100px'}
                         />
                         <Grid style={{display:'flex',marginTop:'20px'}}><Rating name="read-only" value={item.rating} readOnly precision={0.5}/>
                         <Typography>({item.totalpeople})</Typography></Grid>
                         <Typography>{item.title}</Typography>
                         <Typography style={{color:Theme.palette.primary.main}}>{item.price}</Typography>
                     </Grid>    
                 ))}
               </Grid>
             </Grid>
       
        
    
     );
}
 
export default TopRating;