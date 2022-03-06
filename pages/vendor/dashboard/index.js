import {Grid} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Chart from '../../../section/vendor/dashboard/chart'
import VendorMenu from "../../../section/vendor/vendorMenu";
import VendorDrawer from "../../../section/vendor/vendorDrawer";
import CountryPay from "../../../section/vendor/dashboard/countryPay";
import PaperPay from "../../../section/vendor/dashboard/paperPay";
import VendorTitle from "../../../section/vendor/vendorTitle";
import {useState} from "react";
import {useRouter} from "next/router";
import {BoxCustom} from "../../../style/style";

const Dashboard = () => {
    const [menu, setMenu] = useState(false)
    const router = useRouter()
    const matchesMenu = useMediaQuery('(min-width:1025px)');
    return (
        <BoxCustom>
            <VendorDrawer menu={menu} router={router} setMenu={setMenu}/>
            <Grid container spacing={3}>
                <VendorMenu matchesMenu={matchesMenu} router={router}/>
                <Grid item xs={12} lg={9}>
                    <Grid container spacing={3}>
                        <VendorTitle setMenu={setMenu} matchesMenu={matchesMenu} router={router}/>
                        <PaperPay/>
                        <Chart/>
                        <CountryPay/>
                    </Grid>
                </Grid>
            </Grid>
        </BoxCustom>
    )
}

export default Dashboard