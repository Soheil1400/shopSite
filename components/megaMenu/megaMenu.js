import CustomDrop from "./custom-drop";
import {Paper} from "@mui/material";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import LaptopChromebookRoundedIcon from '@mui/icons-material/LaptopChromebookRounded';
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import ToysOutlinedIcon from '@mui/icons-material/ToysOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import RvHookupIcon from '@mui/icons-material/RvHookup';

const Data = [
    {
        category: "Man Clothes", items: [
            {name: "T-shirt", sub: []},
            {name: "Shirt", sub: []},
            {name: "Pant", sub: []},
            {name: "UnderWear", sub: []},
        ]
    },
    {
        category: "Accessories", items: [
            {name: "T-shirt", sub: []},
            {name: "Shirt", sub: []},
            {name: "Pant", sub: []},
            {name: "UnderWear", sub: []},
        ]
    },
    {
        category: "Shoes", items: [
            {name: "T-shirt", sub: []},
            {name: "Shirt", sub: []},
            {name: "Pant", sub: []},
            {name: "UnderWear", sub: []},
        ]
    },
    {
        category: "Shop", items: [
            {name: "T-shirt", sub: []},
            {name: "Shirt", sub: []},
            {name: "Pant", sub: []},
            {name: "UnderWear", sub: []},
        ]
    },
    {
        category: "Bags", items: [
            {name: "T-shirt", sub: []},
            {name: "Shirt", sub: []},
            {name: "Pant", sub: []},
            {name: "UnderWear", sub: []},
        ]
    },
    {
        category: "Woman Clothes", items: [
            {name: "T-shirt", sub: []},
            {name: "Shirt", sub: []},
            {name: "Pant", sub: []},
            {name: "UnderWear", sub: []},
        ]
    },
    {
        category: "Accessories", items: [
            {name: "T-shirt", sub: []},
            {name: "Shirt", sub: []},
            {name: "Pant", sub: []},
            {name: "UnderWear", sub: []},
        ]
    },
    {
        category: "Bags", items: [
            {name: "T-shirt", sub: []},
            {name: "Shirt", sub: []},
            {name: "Pant", sub: []},
            {name: "UnderWear", sub: []},
        ]
    },
]

export const MegaMenu = () => {
    return (
        <Paper sx={{width:"278px"}}>
            <CustomDrop title="Fashion" arr={Data} icon={<ShoppingBagOutlinedIcon/>}/>
            <CustomDrop title="Electronics" arr={Data} icon={<LaptopChromebookRoundedIcon/>}/>
            <CustomDrop title="Bikes" arr={Data} icon={<TwoWheelerIcon/>}/>
            <CustomDrop title="Home & Garden" arr={Data} icon={<LocalFloristOutlinedIcon/>}/>
            {/*<CustomDrop title="Gifts"  icon={<CardGiftcardOutlinedIcon/>}/>*/}

            {/*<CustomDrop title="Music" icon={<ShoppingBagOutlinedIcon/>}/>*/}
            {/*<CustomDrop title="Health & Beauty" icon={<HealthAndSafetyOutlinedIcon/>}/>*/}
            {/*<CustomDrop title="Pets" icon={<PetsOutlinedIcon/>}/>*/}
            {/*<CustomDrop title="Baby Toys" icon={<ToysOutlinedIcon/>}/>*/}
            {/*<CustomDrop title="Groceries" icon={<LocalGroceryStoreOutlinedIcon/>}/>*/}
            {/*<CustomDrop title="Automotive" icon={<RvHookupIcon/>}/>*/}
        </Paper>
    )
}