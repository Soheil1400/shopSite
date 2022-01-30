import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import USA from "../../public/USA.png";

export default function GroupButton({ title }) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        sx={{ color: "white", fontSize: "14px" }}
      >
          <Box component="img" sx={{ height: '14px', marginRight: '8px', borderRadius: '4px'}} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAASCAYAAABM8m7ZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHASURBVHgB5ZM5SANREIb/NRtjNNHgGVDwAK9GFAsLRSsbS0WwsRJLQRAtrC1SCAo2gmIniIWCvRYKiuKBJIbgEdAiRGOSNZebc31vJClFdwMp/IrlfwOz82bmf0LX6IECRplRRPQzxSVMpSIisW/9E8dbg1CLyD+Wcj3mJluxuv0Iv5TA+HA9LhxB3D2F0NFsxnBfDdZ23LBWl2BmogW2rXuE2cUitg2ohQpLoSQOL3wIfCQpyAvGE2nSoWgSZ/YAae+7jNPbABXlRGybUIuYFVfOIBSFpo5nTwyvgThpz5uMUoMul+B0h5EPqLCR/Xh9sRuzy3ba7fRYE+s6jP0jD0YGrOjttGBpwwWzSY/FqTYsrDgQDCdhlc6hFoGbS6cTUGMxwOuXKcjNVawvYqNPwMx0VE4jk1EoXltpoImk2VmzuXjHPR0VOLlJUcddrRV4eInkLtHeZMKlU6JzQ52R7TqOmJwHc/FiQ73VuHZJpAd6qpipEvAF42hrNKGlvowKZ9IKRvqtzGB+StZiLiH7jukgAIry++TdvXmoReRjVYsmc0mS9Ice84eoxSBaEFxoL0jHRSgQBdtxwTr+f+b6AsZWweAQyAojAAAAAElFTkSuQmCC'/>
        {title}
        <KeyboardArrowDownIcon sx={{ marginLeft: "8px", fontSize: "14px" }} />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>Car</MenuItem>
                  <MenuItem onClick={handleClose}>Clotles</MenuItem>
                  <MenuItem onClick={handleClose}>Electronics</MenuItem>
                  <MenuItem onClick={handleClose}>Laptop</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
