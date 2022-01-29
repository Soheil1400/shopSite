import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Image from 'next/image'
import CardContent from '@mui/material/CardContent';
import Image1 from '../assets/CategoryListImage/automobile.png';
import Image2 from '../assets/CategoryListImage/car.png';
import Image3 from '../assets/CategoryListImage/desktop.png';
import Image4 from '../assets/CategoryListImage/electronic.png';
import Image5 from '../assets/CategoryListImage/fashion.png';
import Image6 from '../assets/CategoryListImage/fashion2.png';
import Image7 from '../assets/CategoryListImage/tablet.png';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    // display:'flex',
    // flexDirection:'row',
    alignContent:'center',
    boxShadow:'none',
    color: theme.palette.text.secondary,
  }));
const CategoryList = () => {
    const listCategory=[
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
    ]
    return (
        <Grid container>
           {listCategory.map((item)=>(
                <Grid item xs={4} sm={3} md={2} key={item.id} >
                      <Item>
                         <Card sx={{display:'flex',flexDirection:'row'}} display={'flex'} flexDirection={'row'}>
                                <CardContent display={'flex'} flexDirection={'row'} textAlign={'left'}>
                                <Image
                               src={item.image}
                               alt={item.title}
                               width={'100px'}
                               loading='lazy'
                               />
                        <typography variant={'title'} style={{paddingBottom:'100px'}}>
                         {item.title}
                       </typography>
                                  </CardContent>
     </Card>
 </Item>
                </Grid>
           ))}
       </Grid>
    )

    ;
}

export default CategoryList;