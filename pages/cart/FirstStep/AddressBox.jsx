import { useSelector } from "react-redux";

import { Divider, TextField } from "@mui/material";

import AddressBoxForm from "./AdressBoxForm"

import { PaperCustom, PrimaryBtn, SecondaryBtn,TypographyGray } from "../../../style/style";
import {
  TypographyMain,
  TypographyMainTotal,
  TypographyFormTitle,
  CustomChip,
  CustomGridRow,
} from "./AdressBoxStyle";

const AddressBox = ({ handleNext }) => {
  const items = useSelector((state) => state.cart.items);
  return (
    <PaperCustom>
      <CustomGridRow item container>
        <TypographyGray fontSize="14px">Total:</TypographyGray>
        <TypographyMainTotal>
          $
          {items.reduce((price, item) => {
            price = price + item.count * item.price;
            return price;
          }, 0)}
          .00
        </TypographyMainTotal>
      </CustomGridRow>
      <Divider sx={{ margin: "8px 0" }} />
      <CustomGridRow item container my="16px">
        <TypographyMain>Additional Comments</TypographyMain>
        <CustomChip label="Note" />
      </CustomGridRow>
      <TextField multiline rows={6} fullWidth sx={{ margin: "8px 0" }} />
      <Divider sx={{ margin: "8px 0" }} />
      <TextField placeholder="Voucher" fullWidth sx={{ margin: "8px 0" }} />
      <SecondaryBtn fullWidth>Apply Voucher</SecondaryBtn>
      <Divider sx={{ margin: "8px 0" }} />
      <CustomGridRow item container>
        <TypographyMain sx={{ margin: "8px 0" }}>
          Shipping Estimates
        </TypographyMain>
      </CustomGridRow>
      <AddressBoxForm/>
      <TypographyFormTitle>Zip Code</TypographyFormTitle>
      <TextField placeholder="3100" fullWidth sx={{ margin: "8px 0" }} />
      <SecondaryBtn fullWidth sx={{ margin: "8px 0" }}>
        Calculate Shipping
      </SecondaryBtn>
      <PrimaryBtn fullWidth onClick={() => handleNext()}>
        Checkout Now
      </PrimaryBtn>
    </PaperCustom>
  );
};

export default AddressBox;
