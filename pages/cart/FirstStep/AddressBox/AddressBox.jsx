import { styled } from "@mui/material/styles";
import { Grid, IconButton, Paper, Typography } from "@mui/material";
import Theme from "../../../../theme/theme";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { forwardRef, useState } from "react";
import Link from "next/link";

const AddressBox = ({ product }) => {
  const PaperCustom = styled(Paper)({
    alignItems: "center",
    justifyContent: "center",
    padding: "18px",
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
  const TypographyPrime = styled(Typography)({
    color: Theme.palette.primary.main,
  });
  const PMButton = styled(IconButton)({
    backgroundColor: Theme.palette.primary.light,
    color: Theme.palette.primary.main,
    fontWeight: "bold",
    padding: "2px",
    textTransform: "none",
    border: "1px solid #E94560",
    boxShadow: "none",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: Theme.palette.primary.main,
      color: Theme.palette.primary.light,
    },
  });
  const GridSpaceBetween = styled(Grid)({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  });

  return (
    <PaperCustom>
      <GridSpaceBetween>
        <TypographyMain>j,bbj,j,bj,</TypographyMain>
        <PMButton>
          <HorizontalRuleIcon />
        </PMButton>
      </GridSpaceBetween>
      <GridSpaceBetween my={0.5}>
        <TypographyMain pr={1}>kigkhkiki</TypographyMain>
      </GridSpaceBetween>
      <GridSpaceBetween>
        <Grid>kikiukih</Grid>
        <PMButton>
          <AddIcon />
        </PMButton>
      </GridSpaceBetween>
    </PaperCustom>
  );
};

export default AddressBox;
