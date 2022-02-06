import { ProductData } from "../../../../data/Productdata";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import CartProduct from "../CartProduct/CartProduct";

const CartProductList = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      {ProductData.map((product) => (
        <Grid item>
          <CartProduct product={product} key={product.id} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CartProductList;
