import { useEffect, useState } from "react";
import { AppBar, Toolbar, Box, Stack } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import AccountIcon from "./components/account-icon";
import Searchbar from "./components/searchbar";
import SimpleSearchbar from "./components/simple-searchbar";
import MegaMenuButton from "./components/megaMenu-button";

export default function Appbar() {
  const matches = useMediaQuery("(min-width:901px)");
  const [isScroll, setIsScroll] = useState(false);

  const listenToScroll = () => {
    let heightToHideFrom = 40;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      !isScroll && setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <AppBar
        position="sticky"
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
              <Stack direction="row">
                <Box
                  component="img"
                  sx={{ width: "98px", height: "50px", marginRight: "8px" }}
                  src="https://bonik-vuetify.vercel.app/img/logo.6d0b86e2.svg"
                />
                {isScroll && <MegaMenuButton backColor="#ffffff" />}
              </Stack>
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
