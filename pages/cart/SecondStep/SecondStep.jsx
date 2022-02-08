import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import ShippingAddress from "./ShippingAddress/ShippingAddress";
import BillingAdress from "./BillingAdress/BillingAdress";
import Vocher from "./Vocher/Vocher";
const SecondStep = () => {
  const CustomGridRow = styled(Grid)({
    direction: "row-reverse",
    justifyContent: "space-between",
    alignItems: "flex-start",
    wrap: "nowrap",
  });
  return (
    <CustomGridRow container>
      <Grid item xs={12} lg={7.8}>
        <ShippingAddress />
        <BillingAdress />
      </Grid>
      <Grid item xs={12} lg={3.8}>
        <Vocher />
      </Grid>
    </CustomGridRow>
  );
};

export default SecondStep;
