import {Box,Grid,ListItemText,MenuList,SwipeableDrawer,Typography} from "@mui/material";
import Theme from "../../theme/theme";
import {TypographyGray,MenuItemCustom} from "../../style/style";
import {drawerMenu} from "../../data/drawerMenu";

const VendorDrawer = ({menu,setMenu,router}) =>{
    return(
        <SwipeableDrawer anchor="left" open={menu} onClose={()=>setMenu(false)} onOpen={()=>setMenu(true)}>
            <Box pt={2} pr={2} role="presentation" width={'280px'} onClick={()=>setMenu(false)} onKeyDown={()=>setMenu(false)}>
                <MenuList dense mb={3}>
                    {drawerMenu.map(d => (
                        <Grid key={d.id} mb={4}>
                            <MenuItemCustom>
                                <ListItemText>
                                    <TypographyGray pl={1} fontSize={'12px'}>
                                        {d.title}
                                    </TypographyGray>
                                </ListItemText>
                            </MenuItemCustom>
                            {d.items.map(i => (
                                <MenuItemCustom sx={{margin:'5px 0',height:'5px',color: router.asPath === i.link ? Theme.palette.primary.main : '',borderLeft: router.asPath === i.link ? `4px solid ${Theme.palette.primary.main}` : ''}}>
                                    <Grid pl={1} mr={1} mt={0.6}>
                                        {i.icon}
                                    </Grid>
                                    <ListItemText sx={{fontSize:'30px'}}>
                                        <Typography>
                                            {i.title}
                                        </Typography>
                                    </ListItemText>
                                    <Typography>
                                        {i.number}
                                    </Typography>
                                </MenuItemCustom>
                            ))}
                        </Grid>
                    ))}
                </MenuList>
            </Box>
        </SwipeableDrawer>
    )
}

export default VendorDrawer