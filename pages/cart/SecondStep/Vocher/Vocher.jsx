import { styled } from "@mui/material/styles";
import {
  Grid,
  Typography,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import Theme from "../../../../theme/theme";
import { PaperCustom,TypographyMain,TypographyGray } from "../../../../style/style";
const Vocher = () => {
  const TypographyMainVocher = styled(TypographyMain)({
    fontSize: "18px",
    lineHeight: "1",
  });
  const TypographyGrayVocher = styled(TypographyGray)({
    fontSize:"14px",
  });
  const CartButton = styled(Button)({
    height: "40",
    lineHeight: "1",
    borderRadius: "5",
    padding: " 11px 1.5rem",
    outline: "none",
    fontSize: "14",
    fontWeight: "600",
    transition: " all 150ms ease-in-out 0s",
  });
  const ViewCardButton = styled(CartButton)({
    border: "1px solid rgb(233, 69, 96)",
    background: "transparent",
    color: " rgb(233, 69, 96)",
    "&:hover": {
      backgroundColor: "rgb(233, 69, 96)",
      boxShadow: "none",
      color: "rgb(255, 255, 255)",
    },
  });
  const CustomGridRow = styled(Grid)({
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "8px 0",
  });
  return (
    <PaperCustom>
      <CustomGridRow item container>
        <TypographyGrayVocher >Subtotal:</TypographyGrayVocher>
        <TypographyMainVocher>$2610.00</TypographyMainVocher>
      </CustomGridRow>
      <CustomGridRow item container>
        <TypographyGrayVocher>Shipping:</TypographyGrayVocher>
        <TypographyMainVocher>-</TypographyMainVocher>
      </CustomGridRow>
      <CustomGridRow item container>
        <TypographyGrayVocher>Tax:</TypographyGrayVocher>
        <TypographyMainVocher>S40.00</TypographyMainVocher>
      </CustomGridRow>
      <CustomGridRow item container>
        <TypographyGrayVocher>Discount:</TypographyGrayVocher>
        <TypographyMainVocher>-</TypographyMainVocher>
      </CustomGridRow>
      <Divider />
      <Grid container direction="row-reverse">
        <Typography color={Theme.palette.secondary.dark} fontSize="25px">$2610.00</Typography>
      </Grid>
      <TextField placeholder="Voucher" fullWidth sx={{ margin: "8px 0" }} />
      <ViewCardButton fullWidth>Apply Voucher</ViewCardButton>
    </PaperCustom>
  );
};

export default Vocher;
