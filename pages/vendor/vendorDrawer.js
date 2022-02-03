import {Box, Grid, ListItemText, MenuItem, MenuList, SwipeableDrawer, Typography} from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import {styled} from "@mui/material/styles";
import Theme from "../../theme/theme";

const VendorDrawer = ({menu,setMenu,router}) =>{
    const MenuItemCustom = styled(MenuItem)({
        margin:'0.4rem 0',
        color: Theme.palette.secondary.dark,
        backgroundColor: Theme.palette.primary.light,
        borderLeft:`4px solid ${Theme.palette.primary.light}`,
        '&:hover': {
            color: Theme.palette.primary.main,
            backgroundColor: Theme.palette.primary.light,
            borderLeft:`4px solid ${Theme.palette.primary.main}`,
        },
    })
    const TypographyGray = styled(Typography)({
        color: Theme.palette.secondary.light
    })
    return(
        <SwipeableDrawer anchor="left" open={menu} onClose={()=>setMenu(false)} onOpen={()=>setMenu(true)}>
            <Box pr={2} role="presentation" width={'280px'} onClick={()=>setMenu(false)} onKeyDown={()=>setMenu(false)}>
                <MenuList dense mb={3}>
                    <MenuItemCustom>
                        <ListItemText>
                            <TypographyGray fontSize={'12px'}>
                                DASHBOARD
                            </TypographyGray>
                        </ListItemText>
                    </MenuItemCustom>
                    <MenuItemCustom sx={{color: router.asPath === '/vendor/orders' ? Theme.palette.primary.main : '',borderLeft: router.asPath === '/vendor/orders' ? `4px solid ${Theme.palette.primary.main}` : ''}}>
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
                        <ListItemText color={Theme.palette.secondary.light}>
                            <TypographyGray sx={{fontSize:'12px'}}>
                                ACCOUNT SETTINGS
                            </TypographyGray>
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