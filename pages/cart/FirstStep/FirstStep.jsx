import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import CartProductList from "./CartProductList/CartProductList";
import AddressBox from "./AddressBox/AddressBox";

const CartComponent = () => {
  const BoxCustom = styled(Box)({
    display: "flex",
    flexDirection: "column",
    padding: "12px",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "1200px",
    margin: "auto",
  });
  const CartCustomGrid = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    padding: "12px",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "1200px",
    margin: "auto",
  });

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
    >
      <Grid item xs={12} lg={8}>
        <CartProductList />
      </Grid>
      <Grid item xs={12} lg={4}>
        <AddressBox />
      </Grid>
    </Grid>
  );
};

export default CartComponent;
