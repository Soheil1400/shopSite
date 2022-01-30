import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function SimpleMenu({ title, arr }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [overB, setOverB] = React.useState(false);
  const [overM, setOverM] = React.useState(false);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
      setOverB(true)
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        sx={{color: overB ? 'red' : 'black', fontSize: '14px', marginLeft: '32px', padding: '0px', minWidth: '10px', textTransform: 'none'}}
        onMouseOver={handleClick}
        onMouseOut={()=>setOverB(false)}
      >
        {title}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={arr.length ? Boolean(anchorEl) : false}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        {arr.map((item) => (
          <MenuItem onClick={handleClose}>{item}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}
