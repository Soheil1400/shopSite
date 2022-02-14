import { styled } from "@mui/material/styles";
import { useState } from "react";
import Link from "next/link";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { Grid, Paper, TextField } from "@mui/material";

import Payment from "../SecondStep/Vocher/Payment";
import Paypal from "./PayPal"
import CreditCard from "./CreditCard"
import { creditCard } from "./ThirdStepData";
import { PrimaryBtn, SecondaryBtn } from "../../../style/style";
import { TypographyFormTitle } from "../FirstStep/AddressBox/AdressBoxStyle";
const ThirdStep = ({ handleBack }) => {
  const [value, setValue] = useState("credit");
  const [credit, setCredit] = useState("flex");
  const [paypal, setPaypal] = useState("none");

  const handleChange = (e) => {
    setValue(e.target.value);
    setCredit(
      e.target.value === "credit" && credit === "none" ? "flex" : "none"
    );
    setPaypal(
      e.target.value === "paypal" && paypal === "none" ? "flex" : "none"
    );
  };

  const PaperCustom = styled(Paper)({
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px 28px",
    borderRadius: "10px",
    margin: "0.5rem 0",
    boxShadow: " rgb(3 0 71 / 9%) 0px 1px 3px",
  });
  const CustomGridRow = styled(Grid)({
    direction: "row-reverse",
    justifyContent: "space-between",
    wrap: "nowrap",
  });
  const CustomRadio = styled(Radio)({
    fontSize: "20px",
    color: "rgb(15, 52, 96)",
    "&.Mui-checked": {
      color: "rgb(15, 52, 96)",
    },
  });
  return (
    <CustomGridRow container mb={2}>
      <Grid container item justifyContent="space-between" xs={12} lg={7.8}>
        <PaperCustom>
          <FormControl fullWidth>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Pay with credit card"
              name="radio-buttons-group"
              value={value}
              onChange={(e) => handleChange(e)}
            >
              <FormControlLabel
                value="credit"
                control={<CustomRadio />}
                label="Pay with credit card"
              />
              <CreditCard credit={credit} />
              <FormControlLabel
                value="paypal"
                control={<CustomRadio />}
                label="Pay with Paypal"
              />
              <Paypal paypal={paypal} />
              <FormControlLabel
                value="Cash"
                control={<CustomRadio />}
                label="Cash On Delivery"
              />
            </RadioGroup>
          </FormControl>
        </PaperCustom>
        <Grid item xs={5.8} my={2}>
          <SecondaryBtn fullWidth onClick={() => handleBack()}>
            Back to Cart
          </SecondaryBtn>
        </Grid>
        <Grid item xs={5.8} my={2}>
          <Link href="/vendor/orders">
            <PrimaryBtn fullWidth>Proceed to Payment</PrimaryBtn>
          </Link>
        </Grid>
      </Grid>
      <Grid item xs={12} lg={3.8}>
        <PaperCustom >
          <Payment />
        </PaperCustom>
      </Grid>
    </CustomGridRow>
  );
};

export default ThirdStep;
