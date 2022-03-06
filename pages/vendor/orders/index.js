import useMediaQuery from '@mui/material/useMediaQuery';
import {useState} from "react";
import {Grid} from '@mui/material';
import Order from "../../../section/vendor/orders/order";
import TitleOrders from "../../../section/vendor/orders/titleOrders";
import VendorMenu from "../../../section/vendor/vendorMenu";
import VendorDrawer from "../../../section/vendor/vendorDrawer";
import PaginationCustom from "../../../components/pagination/pagination";
import VendorTitle from "../../../section/vendor/vendorTitle";
import {useRouter} from "next/router";
import {orders} from "../../../data/orders";
import {BoxCustom} from "../../../style/style";

const Orders = () => {
    const matches = useMediaQuery('(min-width:800px)');
    const matchesMenu = useMediaQuery('(min-width:1025px)');
    const [menu,setMenu] = useState(false)
    const router = useRouter()
    return (
            <BoxCustom>
                <VendorDrawer menu={menu} setMenu={setMenu} router={router}/>
                <Grid container spacing={3}>
                    <VendorMenu matchesMenu={matchesMenu} router={router}/>
                    <Grid item xs={12} lg={9}>
                        <VendorTitle matchesMenu={matchesMenu} setMenu={setMenu} router={router}/>
                        <TitleOrders matches={matches}/>
                        {orders.map(order =>
                            (<Order key={order.id} process={order.process} price={order.price} time={order.time} id={order.id} matches={matches}/>))}
                        <PaginationCustom/>
                    </Grid>
                </Grid>
            </BoxCustom>
    )
}

export default Orders