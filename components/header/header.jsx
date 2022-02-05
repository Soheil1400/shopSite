import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import useMediaQuery from "@mui/material/useMediaQuery";

import GroupButton from "./group-button-header";

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
            <LocalPhoneOutlinedIcon sx={{ marginRight: "8px", fontSize: "16px" }} />
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
              sx={{ width: "98px", height: "50px", borderRadius: '4px' }}
              src="https://bonik-vuetify.vercel.app/img/logo.6d0b86e2.svg"
            />
          </>
        )}
        <Stack direction="row" alignItems="center">
          {matches && <>
          <Typography
            variant="p"
            component="div"
            sx={{ marginRight: "20px", fontSize: "12px" }}
          >
            Theme FAQ's
          </Typography>
          <Typography
            variant="p"
            component="div"
            sx={{ marginRight: "20px", fontSize: "12px" }}
          >
            Need Help?
          </Typography>
          </>}
          <GroupButton title="EN" />
          <GroupButton title="USD" />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
