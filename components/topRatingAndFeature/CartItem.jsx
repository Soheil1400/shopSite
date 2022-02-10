import Rating from '@mui/material/Rating';
import {styled} from '@mui/material/styles';
import { Typography ,Grid ,Paper,Box} from '@mui/material';
import Image from 'next/image';
import theme from '../../theme/theme';
import Theme from "../../theme/theme";
const StyledPaper=styled(Paper)({
    position: "absolute",
    backgroundColor: "black",
    zIndex: "1",
    top: "0",
    right: "0",
    bottom: "4px",
    left: "0",
    opacity: "0",
    cursor:'pointer',
    borderRadius:'10px',
    "&:hover": {opacity: ".3", transition: 'all 250ms ease-in-out 0s'},
})
const CartItem = ({image,title,rating,price,display,alignItem,total,w=900,h=900}) => {
    return (
        <Grid display={'flex'} alignItems={alignItem} flexDirection={'column'}>
        <Grid position={'relative'}>
            <Image src={image} alt={title} width={w} height={h}/>
            <StyledPaper>{}</StyledPaper>
        </Grid>
        <Grid display={display} mt={1} m={1}>
           <Grid display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
               <Rating name="read-only" value={rating} size={'small'} readOnly precision={0.5} />
               <Typography color={Theme.palette.secondary.main}>({total})</Typography>
           </Grid>
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