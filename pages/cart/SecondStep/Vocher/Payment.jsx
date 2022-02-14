import { useSelector } from "react-redux";

import { Grid, Typography, Divider } from "@mui/material";

import Theme from "../../../../theme/theme";
import {
  TypographyMainVocher,
  TypographyGrayVocher,
  CustomGridRow,
} from "./VocherStyle";

const Payment = () => {
  const items = useSelector((state) => state.cart.items);
  return (
      <>
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
      </>
  );
};

export default Payment;