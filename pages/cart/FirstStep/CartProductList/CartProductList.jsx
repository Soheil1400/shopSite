import { ProductData } from "../../../../data/Productdata";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import CartProduct from "../CartProduct/CartProduct";

const CartProductList = () => {
  return (
    <Grid item mr="8px" xs={12} lg={7.99}>
      {ProductData.map((product) => (
        <CartProduct product={product} key={product.id} />
      ))}
    </Grid>
  );
};

export default CartProductList;
