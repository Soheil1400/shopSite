import styled from "@emotion/styled";
import { Stack, IconButton, Card, Typography } from "@mui/material";
import Theme from "../../../theme/theme";

export const ProductCard = styled(Card)({
  maxWidth: "380px",
  height: "128px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "16px",
  boxShadow: "none",
});

export const NumberBox = styled(Stack)({
  alignItems: "center",
  padding: "5px",
  background: "transparent",
});

export const NumberButton = styled(IconButton)({
  padding: "5px",
  background: "transparent",
  color: Theme.palette.primary.main,
  border: "1px solid rgb(255, 225, 230)",
  borderRadius: "100%",
  "&:hover": {
    backgroundColor: Theme.palette.primary.main,
    boxShadow: "none",
    color: Theme.palette.primary.light,
  },
  ":disabled": {
    border: "1px solid rgb(218, 225, 231)",
    backgroundColor: "rgb(218, 225, 231)",
    color: "rgb(125, 135, 156)",
    cursor: "not-allowed",
}
});

export const InformationBox = styled(Stack)({
  width: "170px",
  padding: "5",
  background: "transparent",
});

export const ClearButton = styled(IconButton)({
  color: "rgb(125, 135, 156)",
  fontSize: "16",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "transparent",
    boxShadow: "none",
    color: "rgb(125, 135, 156)",
  },
});
export const TypographyMain = styled(Typography)({
  color: Theme.palette.secondary.dark,
  fontSize: "14px",
  fontWeight: "600",
  lineHeight: "1",
  margin: "3px 0",
});
export const TypographyCount = styled(Typography)({
  color: Theme.palette.secondary.dark,
  fontSize: "15px",
  fontWeight: "600",
  margin: "3px 0",
});
export const TypographyGray = styled(Typography)({
  color: Theme.palette.secondary.light,
  fontSize: "10px",
});
export const TypographyPrime = styled(Typography)({
  color: Theme.palette.primary.main,
  fontWeight: "600",
  fontSize: "14px",
  marginTop: "4px",
});
