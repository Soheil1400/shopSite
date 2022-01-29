import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import Typography from "@mui/material/Typography";
import AccountIcon from "./account-icon";
import Searchbar from "./searchbar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DropDown from "./drop-down";

export default function Appbar() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#fff", height: "64px", boxShadow: "none" }}
    >
      <Toolbar
        sx={{
          "@media all": {
            minHeight: "80px",
          },
        }}
      >
        <Button sx={{ color: "black", backgroundColor: "#e6ecf6", fontSize: '14px' }}>
          <ViewCompactIcon sx={{ fontSize: "18px", marginRight: '8px' }} />
          Categories
          <KeyboardArrowDownIcon sx={{ fontSize: "18px", marginLeft: '8px' }} />
        </Button>
       <DropDown/>
      </Toolbar>
    </AppBar>
  );
}
