import {Grid, ListItemText, MenuItem, MenuList, Paper, Typography} from "@mui/material";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import {styled} from "@mui/material/styles";
import Link from 'next/link'

const VendorMenu = ({matchesMenu ,router}) => {
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
    return(
        <Grid item lg={3} p={2} display={matchesMenu === true ? 'inline-block' : 'none'}>
            <PaperCustom>
                <MenuList dense>
                    <MenuItemCustom sx={{color: router.asPath === '/vendor/dashboard' ? '#E94560' : '',borderLeft: router.asPath === '/vendor/dashboard' ? '4px solid #E94560' : ''}}>
                            <Grid mr={1} mt={0.6}>
                                <TableChartOutlinedIcon fontSize={'small'}/>
                            </Grid>
                            <ListItemText>
                                <Link href={'/vendor/dashboard'}>
                                    Dashboard
                                </Link>
                            </ListItemText>
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
                        <ListItemText>
                            <Link href={'/vendor/orders'}>
                                Orders
                            </Link>
                        </ListItemText>
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
    )
}

export default VendorMenu