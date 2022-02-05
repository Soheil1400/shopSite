import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 3,
    top: 3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function AccountIcon() {
  return (
    <Stack direction="row" spacing={2.5}>
      <IconButton aria-label="add an alarm" sx={{ backgroundColor: "#e6ecf6" }}>
        <PersonOutlineOutlinedIcon />
      </IconButton>

      <StyledBadge badgeContent={0} color="error" overlap="circular" showZero>
        <IconButton
          aria-label="add to shopping cart"
          sx={{ backgroundColor: "#e6ecf6" }}
        >
          <ShoppingBagOutlinedIcon/>
        </IconButton>
      </StyledBadge>
    </Stack>
  );
}
