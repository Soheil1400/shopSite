import { BottomNavigationAction, Paper ,BottomNavigation} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import CategoryIcon from '@mui/icons-material/Category';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import { Badge,styled } from "@mui/material";
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      padding: '0 2px',
      marginRight:'25px',
      color:'white',
      backgroundColor:'#E94560'
    },
  }));
const BottomNav = ({ItemCard}) => {
    return (
         <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0  }} elevation={3} >
     <BottomNavigation
     showLabels>
      <BottomNavigationAction sx={{
         '&:hover': {
            color: '#E94560',
            boxDecoration:'none',
            opacity: [0.9, 0.8, 0.7],
          },
     }} icon={<HomeIcon/>} label={'Home'} />
      <BottomNavigationAction sx={{
         '&:hover': {
            color: '#E94560',
            opacity: [0.9, 0.8, 0.7],
          },
     }}icon={<CategoryIcon/>} label={'Category'}/>
         <StyledBadge badgeContent={ItemCard} >
     <BottomNavigationAction label={'Cart'} showLabel={'true'} sx={{
         '&:hover': {
            color: '#E94560',
            opacity: [0.9, 0.8, 0.7],
          },
     }}icon={<ShoppingBagIcon/>} />
     </StyledBadge>
      <BottomNavigationAction sx={{
         '&:hover': {
            color: '#E94560',
            opacity: [0.9, 0.8, 0.7],
          },
     }}icon={<PersonIcon/>} label={'Account'}/>
     </BottomNavigation >
     </Paper>
     );
}
 
export default BottomNav;