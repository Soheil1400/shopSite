import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [overB, setOverB] =React.useState(false);
  const [overM, setOverM] =React.useState(false);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setTimeout (()=>{setAnchorEl(null)},300) ;
  }

  return (
    <div>
      <Button
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        // onClick={handleClick}
        onMouseOver={handleClick}
        onMouseLeave={handleClose}
      >
        Open Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

