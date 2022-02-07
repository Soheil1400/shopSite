import * as React from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Menu from "./components/menu";

export default function Appbar() {
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
          maxWidth: "1248px"
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
          <Button
            sx={{
              color: "black",
              backgroundColor: "#e6ecf6",
              fontSize: "14px",
            }}
          >
            <GridViewRoundedIcon
              sx={{ fontSize: "18px", marginRight: "8px" }}
            />
            Categories
            <KeyboardArrowDownIcon
              sx={{ fontSize: "18px", marginLeft: "8px" }}
            />
          </Button>
          <Menu />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
