import styled from "@emotion/styled";

import Card from "@mui/material/Card";
import {Stack, CardMedia, IconButton} from "@mui/material";
import Typography from "@mui/material/Typography";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import Image from 'next/image'

const CartSelectedProductCard = ({image, number, price, name}) => {
    const ProductCard = styled(Card)({
        maxWidth: "380px",
        height: "128px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
    });

    const NumberBox = styled(Stack)({
        alignItems: "center",
        padding: "5px",
        background: "transparent",
    });

    const NumberButton = styled(IconButton)({
        padding: "5px",
        background: "transparent",
        color: "rgb(233, 69, 96)",
        border: "1px solid rgb(255, 225, 230)",
        borderRadius: "100%",
        "&:hover": {
            backgroundColor: "rgb(233, 69, 96)",
            boxShadow: "none",
            color: "rgb(255, 255, 255)",
        },
    });
    const NumberButtonDisable = styled(IconButton)({
        padding: "5px",
        backgroundColor: "rgb(218, 225, 231)",
        color: "rgb(125, 135, 156)",
        border: "1px solid rgb(218, 225, 231)",
        borderRadius: "100%",
        cursor: "unset",
        "&:hover": {
            backgroundColor: "rgb(218, 225, 231)",
            color: "rgb(125, 135, 156)",
            boxShadow: "none",
        },
    });
    const InformationBox = styled(Stack)({
        width: "170px",
        padding: "5",
        background: "transparent",
    });

    const ClearButton = styled(IconButton)({
        color: "rgb(125, 135, 156)",
        fontSize: "16",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "transparent",
            boxShadow: "none",
            color: "rgb(125, 135, 156)",
        },
    });
    return (
        <ProductCard>
            <NumberBox>
                <NumberButton>
                    <AddOutlinedIcon sx={{fontSize: 20}}/>
                </NumberButton>
                <Typography variant="subtitle1">{number}</Typography>
                {number !== 1
                    ?
                    <NumberButton>
                        <RemoveOutlinedIcon sx={{fontSize: 20}}/>
                    </NumberButton>
                    :
                    <NumberButtonDisable>
                        <RemoveOutlinedIcon sx={{fontSize: 20}}/>
                    </NumberButtonDisable>
                }

            </NumberBox>
            <Image
                src={image}
                sx={{width: 76, height: 76}}
                alt={name}
            />
            <InformationBox>
                <Typography variant="subtitle1" color={" rgb(43, 52, 69)}"}>
                    {name}
                </Typography>
                <Typography variant="overline" color={"rgb(125, 135, 156)"}>
                    {price} * {number}
                </Typography>
                <Typography variant="subtitle1" color={"rgb(233, 69, 96)"}>
                    {" "}
                    {price}
                </Typography>
            </InformationBox>
            <ClearButton>
                <ClearOutlinedIcon fontSize="small"/>
            </ClearButton>
        </ProductCard>
    );
};
export default CartSelectedProductCard;
