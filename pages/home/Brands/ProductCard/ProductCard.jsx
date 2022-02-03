import {useState} from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import {Card, Dialog, Typography, CardMedia, IconButton, Button, Box, Stack, Rating, Chip,} from "@mui/material";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PopUpInformation from "../ProductCard/PopUpInformation/PopUpInformation";

const ProductCard = ({image, number, price, name, brand, numberOfRater, status, rated, soldBy, off, offPercent,}) => {
    const SquareNumberButton = styled(Button)({
        minWidth: "unset",
        padding: "3px",
        border: "1px solid rgb(255, 225, 230)",
        background: "transparent",
        color: " rgb(233, 69, 96)",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "rgb(233, 69, 96)",
            boxShadow: "none",
            color: "rgb(255, 255, 255)",
        },
    });
    const CardStyle = styled(Card)({
        position: "relative",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "12px",
        boxShadow: "none",
        overflow: "hidden",
        backgroundColor: " rgb(255, 255, 255)",
        borderRadius: "8px",
        "&:hover": {
            boxShadow: "rgb(3 0 71 / 9%) 0px 1px 3px",
        },
    });
    const InformationContainer = styled(Box)({
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "0 16px",
        boxShadow: "none",
        backgroundColor: " rgb(255, 255, 255)",
    });
    const InformationBox = styled(Box)({
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "flex-start",
        boxShadow: "none",
        overflow: "hidden",
        backgroundColor: " rgb(255, 255, 255)",
    });
    const NumberBox = styled(Box)({
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "center",
        boxShadow: "none",
        overflow: "hidden",
        backgroundColor: " rgb(255, 255, 255)",
    });
    const OffLabel = styled(Chip)({
        display: "inline-flex",
        borderRadius: "300px",
        backgroundColor: "rgb(233, 69, 96)",
        color: "rgb(255, 255, 255)",
        top: "40px",
        left: "10px",
        fontSize: "10px",
        fontWeight: "600",
    });
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState("none");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <CardStyle onMouseEnter={() => setShow("block")} onMouseLeave={() => setShow("none")}>
            <Stack style={{position: "absolute", right: "20px"}} direction="column" display={show}>
                <Stack direction="column">
                    <IconButton onClick={handleClickOpen}>
                        <VisibilityIcon sx={{color: " rgb(43, 52, 69)"}}/>
                    </IconButton>
                    <Dialog open={open} onClose={handleClose}>
                        <PopUpInformation
                            image={image}
                            number={number}
                            price={price}
                            name={name}
                            brand={brand}
                            numberOfRater={numberOfRater}
                            status={status}
                            rated={rated}
                            soldBy={soldBy}
                            off={off}
                            offPercent={offPercent}
                        />
                    </Dialog>
                    <IconButton>
                        <FavoriteBorderIcon sx={{color: " rgb(43, 52, 69)"}}/>
                    </IconButton>
                </Stack>
            </Stack>
            <OffLabel label={offPercent} display={off === true ? "block" : "none"}/>
            <Stack>
                <CardMedia component="img" image={image} alt="car"/>
            </Stack>
            <InformationContainer>
                <InformationBox>
                    <Typography variant="subtitle1" color={" rgb(43, 52, 69)}"}>
                        {price}
                    </Typography>
                    <Stack spacing={1}>
                        <Rating size={'small'} defaultValue={2.5} precision={0.5} readOnly/>
                    </Stack>
                    <Typography variant="subtitle1" color={"rgb(233, 69, 96)"}>
                        {name}
                    </Typography>
                </InformationBox>
                <NumberBox>
                    <SquareNumberButton>
                        <AddOutlinedIcon sx={{fontSize: 20}}/>
                    </SquareNumberButton>
                    <Typography variant="subtitle1" color={"rgb(233, 69, 96)"}>
                        {number}
                    </Typography>
                    <SquareNumberButton>
                        <RemoveOutlinedIcon sx={{fontSize: 20}}/>
                    </SquareNumberButton>
                </NumberBox>
            </InformationContainer>
        </CardStyle>
    );
};
export default ProductCard;
