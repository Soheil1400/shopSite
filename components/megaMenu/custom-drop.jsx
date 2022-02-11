import React from "react";
import {Typography, Stack, Paper, Grid} from "@mui/material";
import styled from "@emotion/styled";

const TypographyParent = styled(Typography)({
    padding: "8px 8px",
    color: "rgb(43, 52, 69)",
    "&:hover": {
        color: "#D17285",
        backgroundColor: "#FCE1E6",
        transition: 'all 250ms ease-in-out 0s',
        "& .menu": {display: "flex"}
    },
    cursor: "pointer",
    display: 'flex',
    alignItems: 'center',
    justifyContent: "space-between"
})
const TypographyCategory = styled(Typography)({
    fontWeight: "bold", padding: "8px", "&:hover": {
        color: "#D17285",
        transition: 'all 250ms ease-in-out 0s'
    }
})
const TypographyNames = styled(Typography)({
    padding: "8px",
    width: "100%",
    color: "black",
    cursor: "pointer",
    "&:hover": {
        color: "#D17285",
        transition: 'all 250ms ease-in-out 0s',
        "& .subMenu": {display: "block"},
    }
})
const PaperItems = styled(Paper)({
    display: "none",
    position: "absolute",
    top: "0",
    left: "278px",
    width: "550px",
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '10px',
    margin: 'auto',
    boxShadow: ' rgb(3 0 71 / 9%) 0px 1px 3px',
})

export default function CustomDrop({title, arr, icon, arrowIcon}) {
    return (
        <Grid>
            <TypographyParent variant="p">
                <Grid sx={{display: "flex", alignItems: 'center',paddingRight:"30px"}}>
                    <Grid mr={1}>
                        {icon}
                    </Grid>
                    <Grid>
                        {title}
                    </Grid>
                </Grid>
                {arrowIcon}
                <PaperItems className="menu">
                    <Stack sx={{width: "100%"}} direction="row" flexWrap="wrap">
                        {arr.map((i, index) => (
                            <Stack sx={{padding: "16px"}} key={index}>
                                <TypographyCategory variant="p">{i.category}</TypographyCategory>
                                {i.items.map((item, index) => (
                                    <TypographyNames key={index} variant="p">{item.name}</TypographyNames>
                                ))}
                            </Stack>
                        ))}
                    </Stack>
                </PaperItems>
            </TypographyParent>
        </Grid>
    );
}