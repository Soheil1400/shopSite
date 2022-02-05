import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";

import GroupButton from "./group-button-appbar";

export default function Searchbar() {
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
        fontSize: "14px"
      }}
    >
      <SearchIcon sx={{ color: "gray", marginLeft: "24px" }} />
      <InputBase
        sx={{ ml: 1, flex: 1 , fontSize: "14px"}}
        placeholder="Searching and hit enter..."
        inputProps={{ "aria-label": "Searching and hit enter" }}
      />
      <Divider sx={{ height: "40px" }} orientation="vertical" />
      <GroupButton title="All Categories" />
    </Paper>
  );
}
