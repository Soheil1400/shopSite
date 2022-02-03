import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "./menu";

export default function Appbar() {

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#fff", height: "60px", boxShadow: "none" }}
    >
      <Toolbar
        sx={{
          "@media all": {
            minHeight: "60px",
          },
          justifyContent: 'space-between'
        }}
      >
        <Button sx={{ color: "black", backgroundColor: "#e6ecf6", fontSize: '14px' }}>
          <GridViewRoundedIcon sx={{ fontSize: "18px", marginRight: '8px' }} />
          Categories
          <KeyboardArrowDownIcon sx={{ fontSize: "18px", marginLeft: '8px' }} />
        </Button>
        <Menu/>
      </Toolbar>
    </AppBar>
  );
}
