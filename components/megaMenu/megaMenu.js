import CustomDrop from "./custom-drop";
import {Box, Paper} from "@mui/material";
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
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";
import {styled} from "@mui/material/styles";
import {megaMenu} from "../../data/megaMenu";

export const MegaMenu = () => {
    const BoxCustom = styled(Box)({
        display: 'flex',
        padding: '1px',
        maxWidth: '1180px',
        margin:'auto',
    })
    const PaperCustom = styled(Paper)({
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        margin: 'auto',
        boxShadow: ' rgb(3 0 71 / 9%) 0px 1px 3px',
        width: "278px"
    })
    return (
        <BoxCustom>
            <Box sx={{position:'absolute',top:'70px',zIndex:999}}>
                <PaperCustom>
                    <CustomDrop title="Fashion" arr={megaMenu} icon={<ShoppingBagOutlinedIcon/>} arrowIcon={<ArrowForwardIosIcon fontSize={"small"}/>}/>
                    <CustomDrop title="Electronics" arr={megaMenu} icon={<LaptopChromebookRoundedIcon/>} arrowIcon={<ArrowForwardIosIcon fontSize={"small"}/>}/>
                    <CustomDrop title="Bikes" arr={megaMenu} icon={<TwoWheelerIcon/>} arrowIcon={<ArrowForwardIosIcon fontSize={"small"}/>}/>
                    <CustomDrop title="Home & Garden" arr={megaMenu} icon={<LocalFloristOutlinedIcon/>} arrowIcon={<ArrowForwardIosIcon fontSize={"small"}/>}/>
                    <CustomDrop title="Gifts" arr={[]} icon={<CardGiftcardOutlinedIcon/>}/>
                    <CustomDrop title="Music" arr={[]} icon={<ShoppingBagOutlinedIcon/>}/>
                    <CustomDrop title="Health & Beauty" arr={[]} icon={<HealthAndSafetyOutlinedIcon/>}/>
                    <CustomDrop title="Pets" arr={[]} icon={<PetsOutlinedIcon/>}/>
                    <CustomDrop title="Baby Toys" arr={[]} icon={<ToysOutlinedIcon/>}/>
                    <CustomDrop title="Groceries" arr={[]} icon={<LocalGroceryStoreOutlinedIcon/>}/>
                    <CustomDrop title="Automotive" arr={[]} icon={<RvHookupIcon/>}/>
                </PaperCustom>
            </Box>
        </BoxCustom>
    )
}