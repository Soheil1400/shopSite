import React, { useState } from "react";
import { Stack } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CartButton from "./CartButton/CartButton";
import CartSelectedProductsList from "./CartSelectedProductList/CartSelectedProductsList";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import styles from "./cart.style.module.css";
const Cart = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)}>{"right"}</Button>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <div className={styles.cart_drawer_container}>
          <Stack
            className={styles.cart}
            role="presentation"
            onClick={toggleDrawer("right", false)}
            onKeyDown={toggleDrawer("right", false)}
          >
            <div className={styles.cart_header}>
              <ShoppingBagOutlinedIcon
                style={{fontSize: "28", color: "rgb(43, 52, 69)"}}
              />
              <p>3 item</p>
            </div>
            <CartSelectedProductsList className={styles.cart_productCard} />
          </Stack>
          <CartButton />
        </div>
      </Drawer>
    </div>
  );
};
export default Cart;
