import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import CartProductList from "./CartProductList/CartProductList";
import AddressBox from "./AddressBox/AddressBox";
import { ProductData } from "../../../data/Productdata";
import CartProduct from "../FirstStep/CartProduct/CartProduct";
const FirstStep = ({handleNext}) => {
  const CustomGridRow = styled(Grid)({
    direction: "row-reverse",
    justifyContent: "space-between",
    alignItems: "flex-start",
    wrap: "nowrap",
  });
  return (
    <CustomGridRow container>
      <Grid item xs={12} lg={7.8}>
        <CartProductList />
      </Grid>
      <Grid item xs={12} lg={3.8}>
        <AddressBox />
      </Grid>
    </CustomGridRow>
  );
};

export default FirstStep;