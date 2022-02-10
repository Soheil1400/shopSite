import * as React from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import Menu from "./components/menu";
import MegaMenuButton from "./components/megaMenu-button";

export default function Menubar() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#fff",
        boxShadow: " rgb(43 52 69 / 10%) 0px 15px 20px -15px",
      }}
    >
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          height: "60px",
          boxShadow: "none",
          maxWidth: "1225px"
        }}
      >
        <Toolbar
          sx={{
            "@media all": {
              minHeight: "60px",
            },
            justifyContent: "space-between",
          }}
        >
          <MegaMenuButton title="Categories" backColor="#e6ecf6"/>
          <Menu/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
