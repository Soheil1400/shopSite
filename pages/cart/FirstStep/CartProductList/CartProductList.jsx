import { ProductData } from "../../../../data/Productdata";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import CartProduct from "../CartProduct/CartProduct";

const CartProductList = () => {
  return (
    <>
      {ProductData.map((product) => (
        <CartProduct product={product} key={product.id} />
      ))}
    </>
  );
};

export default CartProductList;
