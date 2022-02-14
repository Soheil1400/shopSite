import { styled } from "@mui/material/styles";

import { Grid, Typography, Chip } from "@mui/material";

import Theme from "../../../theme/theme";

export const TypographyMain = styled(Typography)({
  color: Theme.palette.secondary.dark,
  fontSize: "14px",
  fontWeight: "600",
});
export const TypographyMainTotal = styled(Typography)({
  color: Theme.palette.secondary.dark,
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "1",
  marginBottom: "0.5rem",
});
export const TypographyFormTitle = styled(Typography)({
  color: Theme.palette.secondary.dark,
  fontSize: "0.875rem",
  marginBottom: "-10px",
});
export const CustomChip = styled(Chip)({
  boxShadow: "none",
  cursor: "unset",
  padding: "3px 10px",
  backgroundColor: " rgb(255, 225, 230)",
  borderRadius: "3px",
  fontSize: "12px",
  color: "rgb(233, 69, 96)",
});
export const CustomGridRow = styled(Grid)({
  direction: "row",
  justifyContent: "space-between",
  alignItems: "center",
});
