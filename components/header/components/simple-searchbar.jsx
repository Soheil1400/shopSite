import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";


export default function SimpleSearchbar() {
  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: '700px',
        boxShadow: "none",
        border: "0.5px solid lightGray",
        borderRadius: "30px",
        height: "38px",
      }}
    >
        <SearchIcon sx={{color:"gray", marginLeft:'24px'}}/>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Searching For"
        inputProps={{ "aria-label": "Searching For" }}
      />
    </Paper>
  );
}
