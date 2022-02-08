import { styled } from "@mui/material/styles";
import { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import Theme from "../../../../theme/theme";

const Vocher = () => {
  const PaperCustom = styled(Paper)({
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.5rem 1.75rem;",
    borderRadius: "10px",
    margin: "0.5rem 0",
    boxShadow: " rgb(3 0 71 / 9%) 0px 1px 3px",
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
  const CustomGridRow = styled(Grid)({
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin:"8px 0",
  });
  return (
    <PaperCustom>
      <CustomGridRow item container >
        <TypographyGray fontSize="14px">Subtotal:</TypographyGray>
        <TypographyMain
          sx={{ fontSize: "18px", fontWeight: "600", lineHeight: "1" }}
        >
          $2610.00
        </TypographyMain>
      </CustomGridRow>
      <CustomGridRow item container  >
        <TypographyGray fontSize="14px">Shipping:</TypographyGray>
        <TypographyMain
          sx={{ fontSize: "18px", fontWeight: "600", lineHeight: "1" }}
        >
          -
        </TypographyMain>
      </CustomGridRow>
      <CustomGridRow item container >
        <TypographyGray fontSize="14px">Tax:</TypographyGray>
        <TypographyMain
          sx={{ fontSize: "18px", fontWeight: "600", lineHeight: "1" }}
        >
          S40.00
        </TypographyMain>
      </CustomGridRow>
      <CustomGridRow item container >
        <TypographyGray fontSize="14px">Discount:</TypographyGray>
        <TypographyMain
          sx={{ fontSize: "18px", fontWeight: "600", lineHeight: "1" }}
        >
          -
        </TypographyMain>
      </CustomGridRow>
      <Divider />
      <Grid container direction="row-reverse" >
        <TypographyMain fontSize="25px">$2610.00</TypographyMain>
      </Grid>

      <TextField placeholder="Voucher" fullWidth sx={{ margin: "8px 0" }} />
      <ViewCardButton fullWidth>Apply Voucher</ViewCardButton>
    </PaperCustom>
  );
};

export default Vocher;
