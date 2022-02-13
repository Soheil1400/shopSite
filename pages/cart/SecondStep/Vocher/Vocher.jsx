import { useSelector } from "react-redux";

import { Grid, Typography, Divider, TextField } from "@mui/material";

import Theme from "../../../../theme/theme";
import { PaperCustom, SecondaryBtn } from "../../../../style/style";
import {
  TypographyMainVocher,
  TypographyGrayVocher,
  CustomGridRow,
} from "./VocherStyle";

const Vocher = () => {
  const items = useSelector((state) => state.cart.items);
  return (
    <PaperCustom fullWidth>
      <CustomGridRow item container>
        <TypographyGrayVocher>Subtotal:</TypographyGrayVocher>
        <TypographyMainVocher>
          $
          {items.reduce((price, item) => {
            price = price + item.count * item.price;
            return price;
          }, 0)}
          .00
        </TypographyMainVocher>
      </CustomGridRow>
      <CustomGridRow item container>
        <TypographyGrayVocher>Shipping:</TypographyGrayVocher>
        <TypographyMainVocher>-</TypographyMainVocher>
      </CustomGridRow>
      <CustomGridRow item container>
        <TypographyGrayVocher>Tax:</TypographyGrayVocher>
        <TypographyMainVocher>
          $
          {items.reduce((tax, item) => {
            tax = tax + item.count * (item.price * (item.MSale / 1000));
            return tax;
          }, 0)}
          .00
        </TypographyMainVocher>
      </CustomGridRow>
      <CustomGridRow item container>
        <TypographyGrayVocher>Discount:</TypographyGrayVocher>
        <TypographyMainVocher>
          $
          {items.reduce((discount, item) => {
            discount =
              discount + item.count * (item.price * (item.MSale / 100));
            return discount;
          }, 0)}
          .00
        </TypographyMainVocher>
      </CustomGridRow>
      <Divider />
      <Grid container direction="row-reverse">
        <Typography color={Theme.palette.secondary.dark} fontSize="25px">
          $
          {items.reduce((total, item) => {
            total =
            total +
              item.count * item.price -
              item.count * (item.price * (item.MSale / 100))+
              item.count * (item.price * (item.MSale / 1000))
            return total;
          }, 0)}
          .00
        </Typography>
      </Grid>
      <TextField placeholder="Voucher" fullWidth sx={{ margin: "8px 0" }} />
      <SecondaryBtn fullWidth>Apply Voucher</SecondaryBtn>
    </PaperCustom>
  );
};

export default Vocher;
