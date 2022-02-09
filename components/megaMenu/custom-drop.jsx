import React from "react";
import {Typography, Stack, Paper, Grid} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function CustomDrop({title, arr,icon}) {
    return (
        <>
            <Typography
                variant="p"
                sx={{
                    padding: "10px 8px",
                    color: "black",
                    "&:hover": {color: "#D17285",backgroundColor:"#FCE1E6", "& .menu": {display: "flex"}},
                    cursor: "pointer",
                    display: 'flex',
                    alignItems: 'center',
                    position:"relative",
                    justifyContent: 'space-between',
                }}
            >
                <Grid sx={{display:"flex",alignItems: 'center'}}>
                    {icon}
                    {title}
                </Grid>
                <ArrowForwardIosIcon fontSize={"small"}/>
                <Paper
                    className="menu"
                    sx={{
                        display: "none",
                        position: "absolute",
                        borderRadius: '5px',
                        top: "10px",
                        left:"278px",
                        width: "550px",
                        zIndex:2,
                    }}
                >
                    <Stack sx={{width: "100%"}} direction="row" flexWrap="wrap">
                        {arr.map((i,index) => (
                            <Stack sx={{padding:"16px"}} key={index}>
                                <Typography variant="p"
                                            sx={{fontWeight: "bold", padding: "8px", "&:hover": {
                                                    color: "#D17285"}}}>{i.category}</Typography>
                                {i.items.map((item, index) => (
                                    <Stack
                                        key={index}
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                        sx={{
                                            "&:hover": {
                                                color: "red",
                                                "& .menu": {display: "block"},
                                                "& .subMenu": {display: "block"},
                                            },
                                        }}
                                    >
                                        <Typography
                                            variant="p"
                                            sx={{
                                                padding: "8px",
                                                width: "100%",
                                                color: "black",
                                                cursor: "pointer",
                                                "&:hover": {
                                                    color: "#D17285",
                                                    "& .subMenu": {display: "block"},
                                                },
                                            }}
                                        >
                                            {item.name}
                                            <Paper
                                                className="subMenu"
                                                sx={{
                                                    display: "none",
                                                    position: "absolute",
                                                    borderRadius: '5px',
                                                    top: `calc(37px * ${index})`,
                                                    left: "201px",
                                                    width: "200px",
                                                }}
                                            >
                                                <Stack sx={{width: "100%"}}>
                                                    {item.sub.map((sub) => (
                                                        <Typography
                                                            key={sub}
                                                            variant="p"
                                                            sx={{
                                                                padding: "8px",
                                                                width: "100%",
                                                                color: "black",
                                                                cursor: "pointer",
                                                                "&:hover": {
                                                                    color: "red",
                                                                    backgroundColor: "#e6ecf6",
                                                                    "& .subMenu": {display: "block"},
                                                                },
                                                            }}
                                                        >
                                                            {sub}
                                                        </Typography>
                                                    ))}
                                                </Stack>
                                            </Paper>
                                        </Typography>
                                        {!!item.sub.length && <ArrowRightIcon fontSize="small"/>}
                                    </Stack>
                                ))}
                            </Stack>))}
                    </Stack>
                </Paper>
            </Typography>

        </>
    );
}