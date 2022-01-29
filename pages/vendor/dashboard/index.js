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
import Footer from "../../../components/footer/footer";

const Dashboard = () => {
    const [menu,setMenu] = useState(false)
    const router = useRouter()
    const matchesMenu = useMediaQuery('(min-width:1000px)');
    const BoxCustom = styled(Box)({
        display: 'flex',
        flexDirection: 'column',
        padding: '12px',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1200px',
        margin: 'auto'
    })
    const PaperCustom = styled(Paper)({
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '18px 18px',
        borderRadius: '10px',
        margin: '0.5rem 0',
        boxShadow: ' rgb(3 0 71 / 9%) 0px 1px 3px'
    })
    return (
        <>
            <BoxCustom>
                <VendorDrawer menu={menu} router={router} setMenu={setMenu}/>
                <Grid container>
                    <VendorMenu matchesMenu={matchesMenu} router={router}/>
                    <Grid item xs={12} md={9}>
                        <VendorTitle setMenu={setMenu} matchesMenu={matchesMenu} router={router}/>
                        <PaperPay/>
                        <Grid container item xs={12}>
                            <Grid item xs={12} lg={8} p={1}>
                                <PaperCustom>
                                    Sales
                                    <Chart/>
                                </PaperCustom>
                            </Grid>
                            <Grid item xs={12} lg={4} p={1}>
                                <CountryPay/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </BoxCustom>
            <Footer/>
        </>
    )
}

export default Dashboard