import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import Link from "next/link";
import { Grid } from "@mui/material";
<<<<<<< HEAD:pages/home/Cart/CartButtonBox.jsx
import { RedButton, WhiteButton } from "../../../style/style";
=======

import { PrimaryBtn, SecondaryBtn } from "../../../style/style";
>>>>>>> cart-page-4:pages/home/Cart/CartButtonBox/CartButtonBox.jsx

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
        <RedButton sx={{ margin: "0px 1rem 0.75rem" }}>
          CheckOut Now $(
          {items.reduce((price, item) => {
            price = price + (item.count * (item.sale === true ? (item.price * (100 - item.MSale)) / 100 : item.price));
            return price;
          }, 0)}
          )
        </RedButton>
      </Link>
      <Link href={`/cart`}>
        <WhiteButton sx={{ margin: "0px 1rem 0.75rem" }}>
          View Cart
        </WhiteButton>
      </Link>
    </ButtonBox>
  );
};
export default CartButtonBox;
