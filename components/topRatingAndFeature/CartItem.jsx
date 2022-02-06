import Rating from '@mui/material/Rating';
import {styled} from '@mui/material/styles';
import { Typography ,Grid ,Paper,Box} from '@mui/material';
import Image from 'next/image';
import theme from '../../theme/theme';
const StyledImage=styled(Image)({
    cursor:'pointer',
    borderRadius: '10px',
    position:'absolute',
    opacity:'1',
    '&:hover': {
       opacity:'0.3'
    }
})
const StyledGrid=styled(Box)({
    backgroundColor:'gray',
    marginBottom:'0.5rem',
    borderRadius: '10px',
    position:'relative',
})
const CartItem = ({image,title,rating,price,display,alignItem}) => {
    return (
        <Grid display={'flex'} alignItems={alignItem} flexDirection={'column'} p={1}>
        <Grid>
            <StyledGrid ><StyledImage src={image} alt={title}  /></StyledGrid>
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