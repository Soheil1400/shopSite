import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="add an alarm" sx={{ backgroundColor: "#e6ecf6" }}>
        <PersonIcon />
      </IconButton>

      <StyledBadge badgeContent={0} color="error" overlap="circular" showZero>
        <IconButton
          aria-label="add to shopping cart"
          sx={{ backgroundColor: "#e6ecf6" }}
        >
          <ShoppingCartIcon />
        </IconButton>
      </StyledBadge>
    </Stack>
  );
}
