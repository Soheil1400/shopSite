import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import GridViewIcon from '@mui/icons-material/GridView';
import Image from 'next/image'
import Image1 from '../assets/CategoryListImage/automobile.png';
import Image2 from '../assets/CategoryListImage/car.png';
import Image3 from '../assets/CategoryListImage/desktop.png';
import Image4 from '../assets/CategoryListImage/electronic.png';
import Image5 from '../assets/CategoryListImage/fashion.png';
import Image6 from '../assets/CategoryListImage/fashion2.png';
import Image7 from '../assets/CategoryListImage/tablet.png';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Link from 'next/link'
import { Typography } from '@mui/material';
const PaperStyled=styled(Paper)({
    width: '100%',
    alignItems: 'center',
    display:'flex',
    justifyContent: 'flex-start',
    textAlign:'left',
    margin: '0.8rem 0.8rem',
    padding:'10px',
    boxShadow: ' rgb(43 52 71 / 9%) 0px 2px 2px 2px',
    '&:hover': {
        cursor:'pointer',
        boxShadow: 'rgba(3,0,71,0.09) 3px 3px 3px 8px',
     },
});
const StyledStack=styled(Stack)({
    display:'flex',
    flexDirection:'row'
});
const StyledGridIcon=styled(GridViewIcon)({
    color:'#E94560',
    width:'30px',
    height:'30px',
    marginBottom:'0.5rem',
    marginLeft:'0.6rem'
})
const StyledCategoryTypography=styled(Typography)({
    fontSize:'1.5rem',
    fontWeight:'700',
    color:'#2B3445',
    marginLeft:'0.5rem'
})
const StyledViewAllTypography=styled(Typography)({
    color:'#7D879C',
    fontSize:'1rem'
})
const StyledArrowRightIcon=styled(ArrowRightIcon)({
    color:'gray',
    cursor:'pointer',
})
const CustomGrid=styled(Grid)({
   display:'flex',
   alignItem:'center',
   justifyContent:'space-between'
})
const CategoryList = () => {
    const [paper,setpaper]=useState([
        {id:'1',title:'Automobile',image:Image1},
        {id:'2',title:'Car',image:Image2},
        {id:'3',title:'Fashion',image:Image3},
        {id:'4',title:'Electronic',image:Image4},
        {id:'5',title:'Mobile',image:Image5},
        {id:'6',title:'Laptop',image:Image6},
        {id:'7',title:'Desktop',image:Image7},
        {id:'8',title:'Tablet',image:Image1},
        {id:'9',title:'Fashion',image:Image2},
        {id:'10',title:'Electronic',image:Image3},
        {id:'11',title:'Furniture',image:Image5},
        {id:'12',title:'Camera',image:Image4},
    ])
    return (
        <Grid container >
            <CustomGrid container >
                <StyledStack>
                     <StyledGridIcon/>
                    <StyledCategoryTypography variant={'h2'} >Categories</StyledCategoryTypography>
                </StyledStack>
                <StyledStack >
                <StyledViewAllTypography>View all </StyledViewAllTypography>
                  <Link href={"/#"}>
                  <StyledArrowRightIcon/>
                  </Link>
                 </StyledStack>   
            </CustomGrid>
           {paper.map((item)=>(
               <Grid container key={item.id} item xs={12} sm={4} md={2} lg={2} >
                      <PaperStyled>
                      <Image
                        src={item.image}
                        alt={item.title}
                        loading='lazy'
                     />
                        <typography variant={'title'} >
                         {item.title}
                       </typography>
                      </PaperStyled>
               </Grid>    
           ))}
       </Grid>
    )

    ;
}

export default CategoryList;