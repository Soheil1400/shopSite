import useMediaQuery from '@mui/material/useMediaQuery';
import {useState} from "react";
import {Box, Grid} from '@mui/material';
import {styled} from '@mui/material/styles';
import Order from "./order";
import TitleOrders from "./titleOrders";
import VendorMenu from "../vendorMenu";
import VendorDrawer from "../vendorDrawer";
import PaginationCustom from "../../../components/pagination/pagination";
import VendorTitle from "../vendorTitle";
import {useRouter} from "next/router";

const Orders = () => {
    const matches = useMediaQuery('(min-width:800px)');
    const matchesMenu = useMediaQuery('(min-width:1025px)');
    const [menu,setMenu] = useState(false)
    const router = useRouter()
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
    const BoxCustom = styled(Box)({
        display:'flex',
        flexDirection:'column',
        padding: '12px',
        alignItems:'center',
        justifyContent:'center',
        maxWidth:'1200px',
        margin:'auto'
    })
    return (
        <BoxCustom>
            <VendorDrawer menu={menu} setMenu={setMenu} router={router}/>
            <Grid container>
                <VendorMenu matchesMenu={matchesMenu} router={router}/>
                <Grid item xs={12} md={9}>
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