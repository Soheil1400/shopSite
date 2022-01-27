import Order from "./order";
import TitleOrders from "./titleOrders";
import {
    Box,
    Grid,
    Typography,
    Stack,
    Pagination,
    Paper,
    MenuList,
    MenuItem,
    ListItemText,
    SwipeableDrawer
} from '@mui/material';
import {styled} from '@mui/material/styles';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useState} from "react";
import SettingsIcon from '@mui/icons-material/Settings';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import {useRouter} from "next/router";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';

const Orders = () => {
    const matches = useMediaQuery('(min-width:800px)');
    const matchesMenu = useMediaQuery('(min-width:1025px)');
    const router = useRouter()
    const [menu,setMenu] = useState(false)
    const [orders, setOrders] = useState([
        {
            id: '1050017AS',
            process: 'Pending',
            price: 350.00,
            time: 'jan 24,2022'
        },
        {
            id: '1010017AS',
            process: 'Processing',
            price: 350.00,
            time: 'jan 24,2022'
        },
        {
            id: '1050017AB',
            process: 'Delivered',
            price: 320.00,
            time: 'jan 22,2022'
        },
        {
            id: '1053017AB',
            process: 'Delivered',
            price: 320.00,
            time: 'jan 22,2022'
        },
        {
            id: '1060017AB',
            process: 'Cancelled',
            price: 320.00,
            time: 'jan 22,2022'
        }
    ])
    const GridCustomHead = styled(Grid)({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin:'1rem 0'
    })
    const BoxCustom = styled(Box)({
        display:'flex',
        flexDirection:'column',
        padding: '12px',
        alignItems:'center',
        justifyContent:'center',
        maxWidth:'1200px',
        margin:'auto'
    })
    const PaginationCustom = styled(Pagination)({
        margin:'2rem 0'
    })
    const PaperCustom = styled(Paper)({
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5px 0',
        borderRadius: '10px',
        margin: '0.5rem 0',
        boxShadow: ' rgb(3 0 71 / 9%) 0px 1px 3px',
    })
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
    return (
        <BoxCustom>
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
            <Grid container >
                <Grid item lg={3} p={2} display={matchesMenu === true ? 'inline-block' : 'none'}>
                    <PaperCustom>
                        <MenuList dense>
                            <MenuItemCustom>
                                <Grid mr={1} mt={0.6}>
                                    <TableChartOutlinedIcon fontSize={'small'}/>
                                </Grid>
                                <ListItemText>Dashboard</ListItemText>
                            </MenuItemCustom>
                            <MenuItemCustom>
                                <Grid mr={1} mt={0.6}>
                                    <Inventory2OutlinedIcon fontSize={'small'}/>
                                </Grid>
                                <ListItemText>Products</ListItemText>
                                <Typography>
                                    300
                                </Typography>
                            </MenuItemCustom>
                            <MenuItemCustom>
                                <Grid mr={1} mt={0.6}>
                                    <FileUploadOutlinedIcon fontSize={'small'}/>
                                </Grid>
                                <ListItemText>Add New Product</ListItemText>
                            </MenuItemCustom>
                            <MenuItemCustom sx={{color: router.asPath === '/vendor/orders' ? '#E94560' : '',borderLeft: router.asPath === '/vendor/orders' ? '4px solid #E94560' : ''}}>
                                <Grid mr={1} mt={0.6}>
                                    <ShoppingCartOutlinedIcon fontSize={'small'}/>
                                </Grid>
                                <ListItemText>Orders</ListItemText>
                                <Typography>
                                    40
                                </Typography>
                            </MenuItemCustom>
                            <MenuItemCustom>
                                <Grid mr={1} mt={0.6}>
                                    <SettingsIcon fontSize={'small'}/>
                                </Grid>
                                <ListItemText>Account Settings</ListItemText>
                            </MenuItemCustom>
                        </MenuList>
                    </PaperCustom>
                </Grid>
                <Grid item xs={12} md={9}>
                    <GridCustomHead container>
                        <Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <ShoppingBagIcon fontSize={'medium'} sx={{color: '#e94560',marginRight:'0.5rem'}}/>
                            <Typography sx={{fontWeight: 'bolder'}} variant={"h5"}>
                                Orders
                            </Typography>
                        </Grid>
                        <Grid display={matchesMenu === true ? 'none' : 'flex'}>
                            <MenuIcon onClick={()=>setMenu(true)}/>
                        </Grid>
                    </GridCustomHead>
                    <TitleOrders matches={matches}/>
                    {orders.map(order =>
                        (<Order key={order.id} process={order.process} price={order.price} time={order.time} id={order.id} matches={matches}/>)
                    )}
                    <Stack xs={12} alignItems={'center'}>
                        <PaginationCustom variant="outlined" count={5} color={'error'}/>
                    </Stack>
                </Grid>
            </Grid>
        </BoxCustom>
    )
}

export default Orders