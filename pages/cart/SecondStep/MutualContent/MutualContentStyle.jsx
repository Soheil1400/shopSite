import { styled } from "@mui/material/styles";
import { Grid, Paper, Typography} from "@mui/material";
import Theme from "../../../../theme/theme";

export const TypographyMain = styled(Typography)({
  color: Theme.palette.secondary.dark,
});
export const TypographyGray = styled(Typography)({
  color: Theme.palette.secondary.light,
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
export const TypographyFormTitle = styled(Typography)({
  color: Theme.palette.secondary.dark,
  fontSize: "0.875rem",
  marginBottom: "-10px",
});
