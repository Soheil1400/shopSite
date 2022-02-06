import { styled } from "@mui/material/styles";
import { useState } from "react";
import {
  Grid,
  IconButton,
  Paper,
  Typography,
  Divider,
  Chip,
  TextField,
  Button,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Theme from "../../../../theme/theme";

const Vocher = () => {
  const PaperCustom = styled(Paper)({
    alignItems: "center",
    justifyContent: "center",
    padding: "24px 28px",
    borderRadius: "10px",
    margin: "auto",
    boxShadow: " rgb(3 0 71 / 9%) 0px 1px 3px",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "rgb(3 0 71 / 9%) 0px 8px 45px",
    },
  });
  const TypographyMain = styled(Typography)({
    color: Theme.palette.secondary.dark,
  });
  const TypographyGray = styled(Typography)({
    color: Theme.palette.secondary.light,
  });
  const CartButton = styled(Button)({
    height: "40",
    lineHeight: "1",
    borderRadius: "5",
    padding: " 11px 1.5rem",
    outline: "none",
    fontSize: "14",
    fontWeight: "600",
    transition: " all 150ms ease-in-out 0s",
  });
  const CheckOutButton = styled(CartButton)({
    border: "none",
    background: "rgb(233, 69, 96)",
    color: "rgb(255, 255, 255)",
    "&:hover": {
      backgroundColor: "rgb(233, 69, 96)",
      boxShadow: "none",
    },
  });
  const ViewCardButton = styled(CartButton)({
    border: "1px solid rgb(233, 69, 96)",
    background: "transparent",
    color: " rgb(233, 69, 96)",
    "&:hover": {
      backgroundColor: "rgb(233, 69, 96)",
      boxShadow: "none",
      color: "rgb(255, 255, 255)",
    },
  });

  return (
    <PaperCustom>
      <Grid
        item
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        wrap="nowrap"
        xs={12}
        lg={3.99}
      >
        <TypographyGray fontSize="14px">Subtotal:</TypographyGray>
        <TypographyMain
          sx={{ fontSize: "18px", fontWeight: "600", lineHeight: "1" }}
        >
          $2610.00
        </TypographyMain>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        xs={12}
        lg={3.99}
      >
        <TypographyGray fontSize="14px">Shipping:</TypographyGray>
        <TypographyMain
          sx={{ fontSize: "18px", fontWeight: "600", lineHeight: "1" }}
        >
          -
        </TypographyMain>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        xs={12}
        lg={3.99}
      >
        <TypographyGray fontSize="14px">Tax:</TypographyGray>
        <TypographyMain
          sx={{ fontSize: "18px", fontWeight: "600", lineHeight: "1" }}
        >
          S40.00
        </TypographyMain>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        xs={12}
        lg={3.99}
      >
        <TypographyGray fontSize="14px">Discount:</TypographyGray>
        <TypographyMain
          sx={{ fontSize: "18px", fontWeight: "600", lineHeight: "1" }}
        >
          -
        </TypographyMain>
      </Grid>
      <Divider/>
      <TypographyMain fontSize="25px">$2610.00</TypographyMain>
      <TextField placeholder="Voucher" fullWidth sx={{ margin: "8px 0" }} />
      <ViewCardButton fullWidth>Apply Voucher</ViewCardButton>
    </PaperCustom>
  );
};

export default Vocher;
