import { styled } from "@mui/material/styles";

import { Grid } from "@mui/material";

import CartProductList from "./CartProductList";
import AddressBox from "./AddressBox";

const FirstStep = ({handleNext,activeStep}) => {
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
        <AddressBox handleNext={handleNext} activeStep={activeStep}/>
      </Grid>
    </CustomGridRow>
  );
};

export default FirstStep;
