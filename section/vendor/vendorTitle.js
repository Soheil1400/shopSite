import {Grid} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";
import {styled} from "@mui/material/styles";
import Theme from "../../theme/theme";
import {TypographyMain} from "../../style/style";

const VendorTitle = ({matchesMenu , setMenu , router}) =>{
    const GridCustomHead = styled(Grid)({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin:'1rem 0'
    })
    return(
        <Grid item xs={12} lg={9} mb={router.asPath === '/vendor/dashboard' ? -3 : 0}>
            <GridCustomHead>
                <Grid display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <ShoppingBagIcon sx={{color: Theme.palette.primary.main ,marginRight:'0.7rem',fontSize:'25px'}}/>
                    <TypographyMain fontWeight={700} fontSize={'24px'}>
                        {router.asPath === '/vendor/dashboard' ? <>Dashboard</> : <>Orders</>}
                    </TypographyMain>
                </Grid>
                <Grid display={matchesMenu === true ? 'none' : 'flex'} pr={2}>
                    <MenuIcon sx={{fontSize:'25px'}} onClick={()=>setMenu(true)}/>
                </Grid>
            </GridCustomHead>
        </Grid>
    )
}

export default VendorTitle