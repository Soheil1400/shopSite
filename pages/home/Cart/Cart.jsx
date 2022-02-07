import React, { useState } from "react";
import styled from "@emotion/styled";

import { Stack, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CartButton from "./CartButton/CartButton";
import CartSelectedProductsList from "./CartSelectedProductList/CartSelectedProductsList";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const Cart = ({state ,setState}) => {
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const DrowerContainer = styled(Stack)({
    height:"100%",
    display: " flex",
    justifyContent: "space-between",
  });
  const Header = styled(Stack)({
    width:"74",
    display: "flex",
    flexDirection: "row",
    color: "rgb(43, 52, 69)",
    padding: "20px",
  });

  return (
    <Stack>
      <Drawer

        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <DrowerContainer>
          <Stack
              width={380}
            role="presentation"
            onClick={toggleDrawer("right", false)}
            onKeyDown={toggleDrawer("right", false)}
          >
            <Header>
              <ShoppingBagOutlinedIcon  sx={{ fontSize: 28 }} color={"rgb(43, 52, 69)"} />
              <Typography variant="subtitle1" color={"rgb(43, 52, 69)"}>
                3 item
              </Typography>
            </Header>
            <CartSelectedProductsList />
          </Stack>
          <CartButton />
        </DrowerContainer>
      </Drawer>
    </Stack>
  );
};
export default Cart;
