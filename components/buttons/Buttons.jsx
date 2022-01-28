import { Button,IconButton } from "@mui/material";
import styled from "@emotion/styled";

export const ProjectButton = styled(Button)({
  height: "40",
  lineHeight: "1",
  borderRadius: "5",
  margin: "0px 1rem 0.75rem",
  outline: "none",
  fontSize: "14",
  fontWeight: "600",
  transition: " all 150ms ease-in-out 0s",
});
export const PrimaryButton = styled(ProjectButton)({
  border: "1px solid rgb(233, 69, 96)",
  background: "transparent",
  color: " rgb(233, 69, 96)",
  padding: " 11px 1.5rem",
  "&:hover": {
    backgroundColor: "rgb(233, 69, 96)",
    boxShadow: "none",
    color: "rgb(255, 255, 255)",
  },
});
export const SecondaryButton = styled(ProjectButton)({
  border: "1px solid rgb(233, 69, 96)",
  background: "transparent",
  color: " rgb(233, 69, 96)",
  padding: " 11px 1.5rem",
  "&:hover": {
    backgroundColor: "rgb(233, 69, 96)",
    boxShadow: "none",
    color: "rgb(255, 255, 255)",
  },
});
export const SquerButton = styled(ProjectButton)({
    background: "transparent",
    color: "rgb(233, 69, 96)",
    border: "1px solid rgb(255, 225, 230)",
    padding:" 3px",
  "&:hover": {
    backgroundColor: "rgb(233, 69, 96)",
    boxShadow: "none",
    color: "rgb(255, 255, 255)",
  },
});
export const RoundButton = styled(IconButton)({
  padding: "5px",
  background: "transparent",
  color: "rgb(233, 69, 96)",
  border: "1px solid rgb(255, 225, 230)",
  borderRadius: "100%",
  "&:hover": {
    backgroundColor: "rgb(233, 69, 96)",
    boxShadow: "none",
    color: "rgb(255, 255, 255)",
  },
});
export const RoundButtonDisable = styled(IconButton)({
  padding: "5px",
  backgroundColor: "rgb(218, 225, 231)",
  color: "rgb(125, 135, 156)",
  border: "1px solid rgb(218, 225, 231)",
  borderRadius: "100%",
  cursor: "unset",
  "&:hover": {
    backgroundColor: "rgb(218, 225, 231)",
    color: "rgb(125, 135, 156)",
    boxShadow: "none",
  },
});

