import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";

export const drawerMenu = [
    {
        id: 1,
        title: 'DASHBOARD',
        items: [
            {
                id: 1,
                icon: <ShoppingBagOutlinedIcon/>,
                title: 'Orders',
                number: 5,
                link:'/vendor/orders'
            },
            {
                id: 2,
                icon: <FavoriteBorderOutlinedIcon/>,
                title: 'Wishlist',
                number: 19,
                link:''

            },
            {
                id: 3,
                icon: <HeadsetMicOutlinedIcon/>,
                title: 'Support Tickets',
                number: 1,
                link:''
            },
        ]
    },
    {
        id: 2,
        title: 'ACCOUNT SETTING',
        items: [
            {
                id: 1,
                icon: <PermIdentityOutlinedIcon/>,
                title: 'Profile Info',
                number: 3,
                link:''
            },
            {
                id: 2,
                icon: <LocationOnOutlinedIcon/>,
                title: 'Addresses',
                number: 16,
                link:''

            },
            {
                id: 3,
                icon: <PaymentOutlinedIcon/>,
                title: 'Payment Method',
                number: 4,
                link:''
            },
        ]
    }
]