import {Box, Grid, Paper, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Chart from './chart'
import VendorMenu from "../vendorMenu";
import VendorDrawer from "../vendorDrawer";
import CountryPay from "./countryPay";
import PaperPay from "./paperPay";
import VendorTitle from "../vendorTitle";
import {useState} from "react";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";

const Dashboard = () => {
    const items = useSelector(state => state.cart.items)
    const [menu, setMenu] = useState(false)
    const router = useRouter()
    const matchesMenu = useMediaQuery('(min-width:1025px)');
    const BoxCustom = styled(Box)({
        display: 'flex',
        flexDirection: 'column',
        padding: '12px',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1200px',
        margin: 'auto'
    })
    return (
        <>
            <BoxCustom>
                <VendorDrawer menu={menu} router={router} setMenu={setMenu}/>
                <Grid container>
                    <VendorMenu matchesMenu={matchesMenu} router={router}/>
                    <Grid item xs={12} lg={9}>
                        <VendorTitle setMenu={setMenu} matchesMenu={matchesMenu} router={router}/>
                        <PaperPay/>
                        <Grid container item xs={12}>
                            <Chart/>
                            <CountryPay/>
                        </Grid>
                    </Grid>
                </Grid>
            </BoxCustom>
        </>
    )
}

export default Dashboard