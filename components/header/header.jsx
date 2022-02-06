import * as React from "react";
import { AppBar, Toolbar, Typography, Box, Stack } from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";

import Select from "./custom-select";

const lan = [
  {
    title: "EN",
    img: "https://bonik-react.vercel.app/assets/images/flags/usa.png",
  },
  {
    title: "BN",
    img: "https://bonik-react.vercel.app/assets/images/flags/bd.png",
  },
  {
    title: "HN",
    img: "	https://bonik-react.vercel.app/assets/images/flags/in.png",
  },
];
const usd = [
  {
    title: "USD",
    img: "https://bonik-react.vercel.app/assets/images/flags/usa.png",
  },
  {
    title: "EUR",
    img: "https://bonik-react.vercel.app/assets/images/flags/uk.png",
  },
  {
    title: "BDT",
    img: "https://bonik-react.vercel.app/assets/images/flags/bd.png",
  },
  {
    title: "INR",
    img: "https://bonik-react.vercel.app/assets/images/flags/in.png",
  },
];

export default function Header() {
  const matches = useMediaQuery("(min-width:901px)");

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#0f3460", height: "40px" }}
    >
      <Toolbar
        sx={{
          "@media all": {
            minHeight: "40px",
          },
          justifyContent: "space-between",
        }}
      >
        {matches ? (
          <>
            <LocalPhoneOutlinedIcon
              sx={{ marginRight: "8px", fontSize: "16px" }}
            />
            <Typography
              variant="p"
              component="div"
              sx={{ marginRight: "20px", fontSize: "12px" }}
            >
              +88012 3456 7894
            </Typography>
            <EmailOutlinedIcon sx={{ marginRight: "8px", fontSize: "16px" }} />
            <Typography
              variant="p"
              component="div"
              sx={{ flexGrow: 1, fontSize: "12px" }}
            >
              +9012 3456 7
            </Typography>
          </>
        ) : (
          <>
            <Box
              component="img"
              sx={{ width: "98px", height: "50px", borderRadius: "4px" }}
              src="https://bonik-vuetify.vercel.app/img/logo.6d0b86e2.svg"
            />
          </>
        )}
        <Stack direction="row" alignItems="center">
          {matches && (
            <>
              <Typography
                variant="p"
                component="div"
                sx={{
                  marginRight: "20px",
                  fontSize: "12px",
                  cursor: "pointer",
                  "&:hover": {
                    color: "red",
                  },
                }}
              >
                Theme FAQ's
              </Typography>
              <Typography
                variant="p"
                component="div"
                sx={{
                  marginRight: "20px",
                  fontSize: "12px",
                  cursor: "pointer",
                  "&:hover": {
                    color: "red",
                  },
                }}
              >
                Need Help?
              </Typography>
            </>
          )}
          <Select list={lan} index={2} color="white" top={0} />
          <Select list={usd} index={0} color="white" top={0} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
