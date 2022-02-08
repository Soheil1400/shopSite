import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import Link from "next/link";

import { Grid, Button } from "@mui/material";

const CartButton = () => {
  const items = useSelector((state) => state.cart.items);
  const CartButton = styled(Button)({
    height: "40",
    lineHeight: "1",
    borderRadius: "5",
    padding: " 11px 1.5rem",
    margin: "0px 1rem 0.75rem",
    outline: "none",
    fontSize: "14",
    fontWeight: "600",
    transition: " all 150ms ease-in-out 0s",
  });
  const PrimaryBtn = styled(CartButton)({
    border: "none",
    background: "rgb(233, 69, 96)",
    color: "rgb(255, 255, 255)",
    "&:hover": {
      backgroundColor: "rgb(233, 69, 96)",
      boxShadow: "none",
    },
  });
  const SecondaryBtn = styled(CartButton)({
    border: "1px solid rgb(233, 69, 96)",
    background: "transparent",
    color: " rgb(233, 69, 96)",
    "&:hover": {
      backgroundColor: "rgb(233, 69, 96)",
      boxShadow: "none",
      color: "rgb(255, 255, 255)",
    },
  });
  const ButtonBox = styled(Grid)({
    flexDirection: "column",
    width: "100%",
  });
  return (
    <ButtonBox display={items.length === 0 ? "none" : "flex"}>
      <Link href={`/cart`}>
        <SecondaryBtn>
          CheckOut Now $(
          {items.reduce((price, item) => {
            price = price + item.count * item.price;
            return price;
          }, 0)}
          )
        </SecondaryBtn>
      </Link>
      <Link href={`/cart`}>
        <PrimaryBtn>View Cart</PrimaryBtn>
      </Link>
    </ButtonBox>
  );
};
export default CartButton;
