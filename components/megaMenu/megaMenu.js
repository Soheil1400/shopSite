import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, {useState} from "react";
import styled from "@emotion/styled";
import {Stack} from "@mui/material";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CategoryIcon from '@mui/icons-material/Category';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import LaptopChromebookRoundedIcon from '@mui/icons-material/LaptopChromebookRounded';
import LocalFloristOutlinedIcon from '@mui/icons-material/LocalFloristOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import ToysOutlinedIcon from '@mui/icons-material/ToysOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import RvHookupIcon from '@mui/icons-material/RvHookup';

const data = [
    {
        header: "Profile",
        text: "profile"
    },
    {
        header: "Profile",
        text: "profile"
    },
    {
        header: "Profile",
        text: "profile",
    },
    {
        header: "Profile",
        text: "profile"
    }
]

const Menus = styled(Menu)(
    {
        left: '220px',
        fontSize: "14px",
    }
)

const MenuItems = styled(MenuItem)(
    {
        '&:hover': {color: "#D17285", backgroundColor: "#FCE1E6"},
        width: '200px',
        fontSize: "14px",
        lineHeight: "1.5"
    }
)

const MegaItems = styled(MenuItem)(
    {
        '&:hover': {color: "#D17285", backgroundColor: "white"}
    }
)

const MegaItemsHeader = styled(MenuItem)(
    {
        '&:hover': {color: "#D17285", backgroundColor: "white"}
        ,
        fontWeight: 'bold',
    }
)

const StackWithMargin = styled(Stack)(
    {
        margin: "20px!important"
    }
)

export default function MegaMenu() {
    const [item, setItem] = useState(false);

    const [menu, setMenu] = useState(false);
    const open = Boolean(menu);

    const handleClick = (event) => {
        setMenu(event.currentTarget);
    };
    const handleClose = () => {
        setMenu(false);
    };


    return (
        <div>

            <Button
                style={{color: 'black'}}
                id="basic-button"
                onClick={handleClick}
                startIcon={<CategoryIcon/>}
                endIcon={<KeyboardArrowDownIcon/>}
            >Categories
            </Button>

            <Menu
                id="basic-menu"
                open={open}
                onClose={handleClose}
                MenuListProps={{'aria-labelledby': 'basic-button',}}
            >

                <MenuItems
                    onMouseOver={() => setItem(true)}
                    onMouseLeave={() => setItem(false)}
                >

                    <TwoWheelerIcon sx={{marginRight: "8px"}}/>
                    Fashion
                    <ArrowForwardIosIcon fontSize={"small"} style={{marginLeft: "auto"}}/>
                    {
                        item ?

                            <Menus>

                            <Stack direction="row" spacing={4}>
                                {
                                    data.map(item => (
                                        <div key={item.id}>
                                            <StackWithMargin direction="column" spacing={1}>
                                                <MegaItemsHeader onClick={handleClose}>{item.header}</MegaItemsHeader>
                                                <MegaItems onClick={handleClose}>{item.text}</MegaItems>
                                                <MegaItems onClick={handleClose}>{item.text}</MegaItems>
                                                <MegaItems onClick={handleClose}>{item.text}</MegaItems>
                                            </StackWithMargin>

                                            <StackWithMargin direction="column" spacing={1} key={item.id}>
                                                <MegaItemsHeader onClick={handleClose}>{item.header}</MegaItemsHeader>
                                                <MegaItems onClick={handleClose}>{item.text}</MegaItems>
                                                <MegaItems onClick={handleClose}>{item.text}</MegaItems>
                                                <MegaItems onClick={handleClose}>{item.text}</MegaItems>
                                            </StackWithMargin>

                                        </div>
                                    ))
                                }
                            </Stack>

                        </Menus>
                            :
                            null
                    }

                </MenuItems>


                <MenuItems onClick={handleClose}>
                    <LaptopChromebookRoundedIcon sx={{marginRight: "8px"}}/>
                    Electronics
                    <ArrowForwardIosIcon fontSize={"small"} style={{marginLeft: "auto"}}/>
                </MenuItems>

                <MenuItems onClick={handleClose}>
                    <TwoWheelerIcon sx={{marginRight: "8px"}}/>
                    Bikes
                    <ArrowForwardIosIcon fontSize={"small"} style={{marginLeft: "auto"}}/>
                </MenuItems>

                <MenuItems onClick={handleClose}>
                    <LocalFloristOutlinedIcon sx={{marginRight: "8px"}}/>
                    Home & Garden</MenuItems>
                <MenuItems onClick={handleClose}>
                    <CardGiftcardOutlinedIcon sx={{marginRight: "8px"}}/>
                    Gifts</MenuItems>

                <MenuItems onClick={handleClose}>
                    <HealthAndSafetyOutlinedIcon sx={{marginRight: "8px"}}/>
                    Health & Beauty</MenuItems>

                <MenuItems onClick={handleClose}>
                    <PetsOutlinedIcon sx={{marginRight: "8px"}}/>
                    Pets</MenuItems>

                <MenuItems onClick={handleClose}>
                    <ToysOutlinedIcon sx={{marginRight: "8px"}}/>
                    Baby Toys</MenuItems>

                <MenuItems onClick={handleClose}>
                    <LocalGroceryStoreOutlinedIcon sx={{marginRight: "8px"}}/>
                    Groceries</MenuItems>

                <MenuItems onClick={handleClose}>
                    <RvHookupIcon sx={{marginRight: "8px"}}/>
                    Automotive</MenuItems>

            </Menu>


        </div>
    );
}

