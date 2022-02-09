import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from "@mui/material/Badge";
import {styled} from "@mui/material/styles";
import Cart from '../../../pages/home/Cart/Cart'
import {useMemo, useState} from "react";
import {useSelector} from "react-redux";

const StyledBadge = styled(Badge)(({theme}) => ({
    "& .MuiBadge-badge": {
        right: 15,
        top: 3,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
    }
}));

export default function AccountIcon() {
    const [state, setState] = useState({right: false,});
    const total = useSelector(state => state.cart.items)
    const totalItems = useMemo(()=>   total.reduce((count , item)=>{count = count + item.count ; return count},0), [total])
    return (
        <Stack direction="row" gap={2}>
            <IconButton aria-label="add an alarm" sx={{backgroundColor: "#e6ecf6"}}>
                <PersonOutlineOutlinedIcon/>
            </IconButton>
            <StyledBadge badgeContent={totalItems} color="error" overlap="circular" showZero>
                <IconButton
                    onClick={() => setState({right: true})}
                    aria-label="add to shopping cart"
                    sx={{backgroundColor: "#e6ecf6", marginRight: "12px"}}
                >
                    <ShoppingBagOutlinedIcon/>
                </IconButton>
            </StyledBadge>
            <Cart state={state} setState={setState}/>
        </Stack>
    );
}
