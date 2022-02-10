import * as React from "react";
import { Button, Typography } from "@mui/material";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function MegaMenuButton({title, backColor}) {
  return (
    <Button
      sx={{
        color: "black",
        backgroundColor: `${backColor}`,
        fontSize: "14px",
        "&:hover": { backgroundColor: `${backColor}` },
      }}
    >
      <GridViewRoundedIcon sx={{ fontSize: "18px",margin: "4px" }} />
          {title}
      <KeyboardArrowDownIcon sx={{ fontSize: "18px",margin: "4px"}} />
    </Button>
  );
}
