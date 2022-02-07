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
        <GridCustomHead container>
            <Grid display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <ShoppingBagIcon fontSize={'medium'} sx={{color: Theme.palette.primary.main ,marginRight:'0.5rem'}}/>
                <TypographyMain fontWeight={'bolder'} variant={"h5"}>
                    {router.asPath === '/vendor/dashboard' ? <>Dashboard</> : <>Orders</>}
                </TypographyMain>
            </Grid>
            <Grid display={matchesMenu === true ? 'none' : 'flex'}>
                <MenuIcon onClick={()=>setMenu(true)}/>
            </Grid>
        </GridCustomHead>
    )
}

export default VendorTitle