import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";

import GroupButton from "./group-button-header";

export default function Header() {
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
        }}
      >
        <PhoneIcon sx={{ marginRight: "8px", fontSize: "16px" }} />
        <Typography
          variant="p"
          component="div"
          sx={{ marginRight: "20px", fontSize: "12px" }}
        >
          +9012 3456 789
        </Typography>
        <PhoneIcon sx={{ marginRight: "8px", fontSize: "16px" }} />
        <Typography
          variant="p"
          component="div"
          sx={{ flexGrow: 1, fontSize: "12px" }}
        >
          +9012 3456 7
        </Typography>

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
        <GroupButton title="EN" />
        <GroupButton title="USD" />
      </Toolbar>
    </AppBar>
  );
}
