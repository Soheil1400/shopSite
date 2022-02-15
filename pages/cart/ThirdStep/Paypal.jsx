import { styled } from "@mui/material/styles";

import { Grid, TextField } from "@mui/material";

import { SecondaryBtn } from "../../../style/style";
import { TypographyFormTitle } from "../FirstStep/AdressBoxStyle";

const Paypal = ({ paypal }) => {
  const CustomGridRow = styled(Grid)({
    direction: "row-reverse",
    justifyContent: "space-between",
    wrap: "nowrap",
  });
  return (
    <CustomGridRow container alignItems="center" display={paypal}>
      <Grid item xs={9}>
        <TypographyFormTitle>PayPal Email</TypographyFormTitle>
        <TextField fullWidth sx={{ margin: "8px 0" }} />
      </Grid>
      <SecondaryBtn sx={{ marginLeft: "10px" }}>Submit</SecondaryBtn>
    </CustomGridRow>
  );
};

export default Paypal;
