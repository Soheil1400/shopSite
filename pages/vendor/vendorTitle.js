import {Grid, Typography} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";
import {styled} from "@mui/material/styles";

const VendorTitle = ({matchesMenu , setMenu , router}) =>{
    const GridCustomHead = styled(Grid)({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin:'1rem 0'
    })
    return(
        <GridCustomHead container>
            <Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <ShoppingBagIcon fontSize={'medium'} sx={{color: '#e94560',marginRight:'0.5rem'}}/>
                <Typography sx={{fontWeight: 'bolder'}} variant={"h5"}>
                    {router.asPath === '/vendor/dashboard' ? <>Dashboard</> : <>Orders</>}
                </Typography>
            </Grid>
            <Grid display={matchesMenu === true ? 'none' : 'flex'}>
                <MenuIcon onClick={()=>setMenu(true)}/>
            </Grid>
        </GridCustomHead>
    )
}

export default VendorTitle