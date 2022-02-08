import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import SettingsIcon from "@mui/icons-material/Settings";

export const vendorMenu = [
    {
        id:1,
        icon:<TableChartOutlinedIcon fontSize={'small'}/>,
        title:'Dashboard',
        number:'',
        link:'/vendor/dashboard'
    },
    {
        id:2,
        icon:<Inventory2OutlinedIcon fontSize={'small'}/>,
        title:'Products',
        number:300,
        link:''
    },
    {
        id:3,
        icon:<FileUploadOutlinedIcon fontSize={'small'}/>,
        title:'Add New Product',
        number:'',
        link:''
    },
    {
        id:4,
        icon:<TableChartOutlinedIcon fontSize={'small'}/>,
        title:'Orders',
        number:40,
        link:'/vendor/orders'
    },
    {
        id:5,
        icon:<SettingsIcon fontSize={'small'}/>,
        title:'Account Settings',
        number:'',
        link:''
    },
]