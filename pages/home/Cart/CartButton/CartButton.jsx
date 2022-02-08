import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import Link from "next/link";

import { Grid, Button } from "@mui/material";

import Theme from "../../../../theme/theme";

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
    background: Theme.palette.primary.main,
    color: Theme.palette.primary.light,
    "&:hover": {
      backgroundColor: Theme.palette.primary.main,
      boxShadow: "none",
    },
  });
  const SecondaryBtn = styled(CartButton)({
    border: "1px solid rgb(233, 69, 96)",
    background: "#fff",
    color: Theme.palette.primary.main,
    "&:hover": {
      backgroundColor: Theme.palette.primary.main,
      boxShadow: "none",
      color: Theme.palette.primary.light,
    },
  });
  const ButtonBox = styled(Grid)({
    flexDirection: "column",
    width: "100%",
    height: "10%",
    padding: "10px",
  });
  return (
    <ButtonBox display={items.length === 0 ? "none" : "flex"}>
      <Link href={`/cart`}>
        <PrimaryBtn>
          CheckOut Now $(
          {items.reduce((price, item) => {
            price = price + item.count * item.price;
            return price;
          }, 0)}
          )
        </PrimaryBtn>
      </Link>
      <Link href={`/cart`}>
        <SecondaryBtn>View Cart</SecondaryBtn>
      </Link>
    </ButtonBox>
  );
};
export default CartButton;
