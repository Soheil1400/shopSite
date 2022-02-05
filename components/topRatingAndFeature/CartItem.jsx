import Rating from '@mui/material/Rating';
import {styled} from '@mui/material/styles';
import { Typography ,Grid } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
import theme from '../../theme/theme';
const StyledImage=styled(Image)({
    cursor:'pointer',
    borderRadius: '10px',
    opacity:'1',
    '&:hover': {
       backgroundColor:'gray',
       opacity:'0.3'
    }
})
const CartItem = ({image,title,rating,price,display}) => {
    return (
        <Grid display={'flex'} alignItems={'center'} flexDirection={'column'} >
        <Grid >
            <StyledImage src={image} alt={title}  />
        </Grid>
        <Grid display={display}>
           <Rating name="read-only" value={rating} readOnly precision={0.5}/>
        </Grid>
        <Grid>
            <Typography fontWeight={'600'} color={theme.palette.secondary.dark}>
                {title}
            </Typography>
        </Grid>
        <Grid>
            <Typography fontWeight={'600'} color={theme.palette.primary.main}>
                {price}
            </Typography>
        </Grid>
    </Grid>
      );
}
 
export default CartItem;