import {Box, Grid, ListItemText, MenuItem, MenuList, SwipeableDrawer, Typography} from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import {styled} from "@mui/material/styles";

const VendorDrawer = ({menu,setMenu,router}) =>{
    const MenuItemCustom = styled(MenuItem)({
        margin:'0.4rem 0',
        color: "#2B3445",
        backgroundColor: "#fff",
        borderLeft:'4px solid #fff',
        fontSize:'14px',
        '&:hover': {
            color: "#E94560",
            backgroundColor: "#fff",
            borderLeft:'4px solid #E94560',
        },
    })
    return(
        <SwipeableDrawer anchor="left" open={menu} onClose={()=>setMenu(false)} onOpen={()=>setMenu(true)}>
            <Box pr={2} role="presentation" sx={{ width: '280px'}} onClick={()=>setMenu(false)} onKeyDown={()=>setMenu(false)}>
                <MenuList dense mb={3}>
                    <MenuItemCustom>
                        <ListItemText>
                            <Typography sx={{color:'#7D879C',fontSize:'12px'}}>
                                DASHBOARD
                            </Typography>
                        </ListItemText>
                    </MenuItemCustom>
                    <MenuItemCustom sx={{color: router.asPath === '/vendor/orders' ? '#E94560' : '',borderLeft: router.asPath === '/vendor/orders' ? '4px solid #E94560' : ''}}>
                        <Grid mr={1} mt={0.6}>
                            <ShoppingBagOutlinedIcon fontSize={'small'}/>
                        </Grid>
                        <ListItemText>Orders</ListItemText>
                        <Typography>
                            5
                        </Typography>
                    </MenuItemCustom>
                    <MenuItemCustom>
                        <Grid mr={1} mt={0.6}>
                            <FavoriteBorderOutlinedIcon fontSize={'small'}/>
                        </Grid>
                        <ListItemText>Wishlist</ListItemText>
                        <Typography>
                            19
                        </Typography>
                    </MenuItemCustom>
                    <MenuItemCustom>
                        <Grid mr={1} mt={0.6}>
                            <HeadsetMicOutlinedIcon fontSize={'small'}/>
                        </Grid>
                        <ListItemText>Support Tickets</ListItemText>
                        <Typography>
                            1
                        </Typography>
                    </MenuItemCustom>
                </MenuList>
                <MenuList dense>
                    <MenuItemCustom>
                        <ListItemText sx={{color:'#7D879C'}}>
                            <Typography sx={{color:'#7D879C',fontSize:'12px'}}>
                                ACCOUNT SETTINGS
                            </Typography>
                        </ListItemText>
                    </MenuItemCustom>
                    <MenuItemCustom>
                        <Grid mr={1} mt={0.6}>
                            <PermIdentityOutlinedIcon fontSize={'small'}/>
                        </Grid>
                        <ListItemText>Profile Info</ListItemText>
                        <Typography>
                            3
                        </Typography>
                    </MenuItemCustom>
                    <MenuItemCustom>
                        <Grid mr={1} mt={0.6}>
                            <LocationOnOutlinedIcon fontSize={'small'}/>
                        </Grid>
                        <ListItemText>Addresses</ListItemText>
                        <Typography>
                            16
                        </Typography>
                    </MenuItemCustom>
                    <MenuItemCustom>
                        <Grid mr={1} mt={0.6}>
                            <PaymentOutlinedIcon fontSize={'small'}/>
                        </Grid>
                        <ListItemText>Payment Methods</ListItemText>
                        <Typography>
                            4
                        </Typography>
                    </MenuItemCustom>
                </MenuList>
            </Box>
        </SwipeableDrawer>
    )
}

export default VendorDrawer