import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import CartProductList from "./CartProductList/CartProductList";
import AddressBox from "./AddressBox/AddressBox";
import { ProductData } from "../../../data/Productdata";

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
      alignItems="flex-start"
      wrap="nowrap"
    >
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        mr="16px"
        xs={12}
        lg={7.99}
      >
        <CartProductList ProductData={ProductData} />
      </Grid>
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        xs={12}
        lg={3.99}
      >
        <AddressBox ProductData={ProductData} />
      </Grid>
    </Grid>
  );
};

export default CartComponent;
