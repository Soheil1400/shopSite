import * as React from "react";
import { AppBar, Toolbar, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import AccountIcon from "./components/account-icon";
import Searchbar from "./components/searchbar";
import SimpleSearchbar from "./components/simple-searchbar";

export default function Appbar() {
  const matches = useMediaQuery("(min-width:901px)");

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        height: "80px",
        boxShadow: "none",
        maxWidth: "1248px",
      }}
    >
      <Toolbar
        sx={{
          "@media all": {
            minHeight: "80px",
          },
          justifyContent: matches ? "space-between" : "center",
        }}
      >
        {matches ? (
          <>
            <Box
              component="img"
              sx={{ width: "98px", height: "50px", marginRight: "8px" }}
              src="https://bonik-vuetify.vercel.app/img/logo.6d0b86e2.svg"
            />

            <Searchbar />
            <AccountIcon />
          </>
        ) : (
          <SimpleSearchbar />
        )}
      </Toolbar>
    </AppBar>
    </Box>
  );
}
