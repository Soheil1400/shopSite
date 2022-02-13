import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import {TypographyMain,TypographyGray } from "../../../../style/style";

export const TypographyMainVocher = styled(TypographyMain)({
  fontSize: "18px",
  lineHeight: "1",
});
export const TypographyGrayVocher = styled(TypographyGray)({
  fontSize: "14px",
});
export const CustomGridRow = styled(Grid)({
  direction: "row",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "8px 0",
});
