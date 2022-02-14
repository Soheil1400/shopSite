import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import Link from "next/link";

import { Grid } from "@mui/material";

import { PrimaryBtn, SecondaryBtn } from "../../../style/style";

const CartButtonBox = () => {
  const items = useSelector((state) => state.cart.items);
  const ButtonBox = styled(Grid)({
    flexDirection: "column",
    width: "100%",
    height: "10%",
    padding: "10px",
  });
  return (
    <ButtonBox display={items.length === 0 ? "none" : "flex"}>
      <Link href={`/cart`}>
        <PrimaryBtn sx={{ margin: "0px 1rem 0.75rem" }}>
          CheckOut Now $(
          {items.reduce((price, item) => {
            price = price + item.count * item.price;
            return price;
          }, 0)}
          )
        </PrimaryBtn>
      </Link>
      <Link href={`/cart`}>
        <SecondaryBtn sx={{ margin: "0px 1rem 0.75rem" }}>
          View Cart
        </SecondaryBtn>
      </Link>
    </ButtonBox>
  );
};
export default CartButtonBox;
