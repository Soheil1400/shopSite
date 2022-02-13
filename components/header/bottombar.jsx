import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import {useState} from "react";

export default function FixedBottomNavigation() {
  const [value, setValue] = useState(0);
  return (
    <Box>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, height: '64px', zIndex: 100 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          sx={{ justifyContent: "space-between" }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon sx={{margin: '4px'}}/>} />
          <BottomNavigationAction label="Category" icon={<GridViewOutlinedIcon sx={{margin: '4px'}}/>} />
          <BottomNavigationAction label="Cart" icon={<ShoppingBagOutlinedIcon sx={{margin: '4px'}}/>} />
          <BottomNavigationAction label="Account" icon={<PersonOutlineOutlinedIcon sx={{margin: '4px'}}/>} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

