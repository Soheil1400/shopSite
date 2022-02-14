import { styled } from "@mui/material/styles";

import FormControl from "@mui/material/FormControl";
import { Grid, TextField } from "@mui/material";

import { creditCard } from "./ThirdStepData";
import {  SecondaryBtn } from "../../../style/style";
import { TypographyFormTitle } from "../FirstStep/AddressBox/AdressBoxStyle";

const CreditCard = ({credit}) => {
  const CustomGridRow = styled(Grid)({
    direction: "row-reverse",
    justifyContent: "space-between",
    wrap: "nowrap",
  });

  return (
    <CustomGridRow container spacing={1} display={credit} p={2}>
      {creditCard.map((form) => (
        <Grid item xs={6}  key={form.id}>
          <TypographyFormTitle>{form.title}</TypographyFormTitle>
          <FormControl fullWidth>
            <TextField
              sx={{ margin: "8px 0" }}
              placeholder={form.placeHolder}
            />
          </FormControl>
        </Grid>
      ))}
      <SecondaryBtn sx={{ marginLeft: "10px" }}>Submit</SecondaryBtn>
    </CustomGridRow>
  );
};

export default CreditCard;
