import styled from "@emotion/styled";
import Image from "next/image";
import { useSelector } from "react-redux";

import { Grid, Typography } from "@mui/material";

import Theme from "../../../theme/theme";
import shoppingBag from "../../../asset/general/shoppingBag.svg";

const NoProduct = () => {
  const items = useSelector((state) => state.cart.items);
  const TypographyGray = styled(Typography)({
    color: Theme.palette.secondary.light,
    textAlign: "center",
    marginTop: "1rem",
    maxWidth: "200px",
  });
  const CustomGrid = styled(Grid)({
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
    height:"100%"
  });
  return (
    <CustomGrid display={items.length === 0 ? "flex" : "none"}>
      <Image src={shoppingBag} />
      <TypographyGray>
        Your shopping bag is empty. Start shopping
      </TypographyGray>
    </CustomGrid>
  );
};
export default NoProduct;
