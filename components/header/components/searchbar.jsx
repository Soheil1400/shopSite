import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import Select from "./custom-select";
import SearchResult from "./searchResult";

const lan = [
    {id:1,title: "All Categories", img: ""},
    {id:2,title: "Car", img: ""},
    {id:3,title: "Clothes", img: ""},
    {id:4,title: "Electronics", img: ""},
    {id:5,title: "Laptop", img: ""},
    {id:6,title: "Desctop", img: ""},
    {id:7,title: "Camera", img: ""},
];

export default function Searchbar({search ,setSearch}) {
    const handleChange = (e) => {
        setSearch({[e.target.name]: e.target.value})
    }
    return (
        <Paper
            component="form"
            sx={{
                display: "flex",
                alignItems: "center",
                width: "700px",
                boxShadow: "none",
                border: "0.5px solid lightGray",
                borderRadius: "30px",
                height: "44px",
                fontSize: "14px",
                maxWidth: "70%",
                position: 'relative'
            }}
        >
            <SearchIcon sx={{color: "gray", marginLeft: "24px"}}/>
            <InputBase
                sx={{ml: 1, flex: 1, fontSize: "14px"}}
                placeholder="Searching and hit enter..."
                inputProps={{"aria-label": "Searching and hit enter"}}
                name={'search'}
                value={search.search}
                onChange={handleChange}
            />
            <Divider sx={{height: "40px"}} orientation="vertical"/>
            <Box minWidth={'140px'}>
                <Select list={lan} index={6} color="gray" top={1}/>
            </Box>
            <SearchResult search={search} setSearch={setSearch}/>
        </Paper>
    );
}
