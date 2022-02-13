import { styled } from "@mui/material/styles";

import { Grid, Paper, Typography, Box } from "@mui/material";
import Theme from "../../../../theme/theme";

export const PaperCustom = styled(Paper)({
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  margin: "0.5rem 0",
  boxShadow: " rgb(3 0 71 / 9%) 0px 1px 3px",
});

export const CustomGridRow = styled(Grid)({
  direction: "row",
  wrap: "nowrap",
});
export const CustomGridColumn = styled(Grid)({
  direction: "column",
  justifyContent: "space-between",
  alignItems: "center",
  wrap: "nowrap",
});
export const TypographyMain = styled(Typography)({
  color: Theme.palette.secondary.dark,
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "1",
  marginBottom: "0.5rem",
});
export const TypographyCount = styled(Typography)({
  color: Theme.palette.secondary.dark,
  fontSize: "15px",
  fontWeight: "600",
  margin: "0 8px",
});
export const TypographyGray = styled(Typography)({
  color: Theme.palette.secondary.light,
  fontSize: "14px",
  fontWeight: "600",
});
export const TypographyPrime = styled(Typography)({
  color: Theme.palette.primary.main,
  fontSize: "14px",
  fontWeight: "600",
});
export const CustomBox = styled(Box)({
  color: Theme.palette.secondary.dark,
  cursor: "pointer",
});
