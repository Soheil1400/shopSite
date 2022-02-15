import { styled } from "@mui/material/styles";

import { Grid } from "@mui/material";

import ShippingAddress from "./ShippingAddress";
import BillingAdress from "./BillingAdress";
import Vocher from "./Vocher";
import { PrimaryBtn, SecondaryBtn } from "../../../style/style"

const SecondStep = ({ handleNext, handleBack }) => {
  const CustomGridRow = styled(Grid)({
    direction:"row-reverse",
    justifyContent: "space-between",
    alignItems: "flex-start",
    wrap: "nowrap",
  });
  return (
    <CustomGridRow container>
      <Grid container item justifyContent="space-between" xs={12} lg={7.8}>
        <ShippingAddress />
        <BillingAdress />
        <Grid item xs={5.8} my={2}>
          <SecondaryBtn fullWidth onClick={() => handleBack()}>
            Back to Cart
          </SecondaryBtn>
        </Grid>
        <Grid item xs={5.8} my={2}>
          <PrimaryBtn fullWidth onClick={() => handleNext()}>
            Proceed to Payment
          </PrimaryBtn>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={3.8}>
        <Vocher />
      </Grid>
    </CustomGridRow>
  );
};

export default SecondStep;
