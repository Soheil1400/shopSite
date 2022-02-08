import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";

import { Grid, Typography } from "@mui/material";

import Theme from "../../../../theme/theme";
import shoppingBag from "../../../../asset/general/shoppingBag.svg"

const NoProduct = () => {
  const items = useSelector((state) => state.cart.items);
  const TypographyGray = styled(Typography)({
    color: Theme.palette.secondary.light,
  });
  return (
    <Grid display={items.length === 0 ? "flex" : "none"}>
      <Image src={shoppingBag} />
    </Grid>
  );
};
export default NoProduct;
