import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  Divider,
  Chip,
  TextField,
  Button,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Theme from "../../../../theme/theme";
import {TypographyGray} from "../../../../style/style";

const adressForm = [
  {
    id: 1,
    title: "Country",
    placeholder: "Select Country",
    value: "country",
    item1: "New York",
    item2: "Chigaco",
  },
  {
    id: 2,
    title: "State",
    placeholder: "Select State",
    value: "state",
    item1: "New York",
    item2: "Chigaco",
  },
];
const AddressBox = () => {
  const items = useSelector((state) => state.cart.items);
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const handleChange = (event) => {
    setCountry(event.target.value);
    setState(event.target.value);
  };
  const PaperCustom = styled(Paper)({
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.5rem 1.75rem;",
    borderRadius: "10px",
    margin: "0.5rem 0",
    boxShadow: " rgb(3 0 71 / 9%) 0px 1px 3px",
  });
  const TypographyMain = styled(Typography)({
    color: Theme.palette.secondary.dark,
    fontSize: "14px",
    fontWeight: "600",
  });
  const TypographyMainTotal = styled(Typography)({
    color: Theme.palette.secondary.dark,
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "1",
    marginBottom: "0.5rem",
  });
  const TypographyFormTitle = styled(Typography)({
    color: Theme.palette.secondary.dark,
    fontSize: "0.875rem",
    marginBottom: "-10px",
  });
  const CustomChip = styled(Chip)({
    boxShadow: "none",
    cursor: "unset",
    padding: "3px 10px",
    backgroundColor: " rgb(255, 225, 230)",
    borderRadius: "3px",
    fontSize: "12px",
    color: "rgb(233, 69, 96)",
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
  const PrimaryBtn = styled(CartButton)({
    border: "none",
    background: Theme.palette.primary.main,
    color: Theme.palette.primary.light,
    "&:hover": {
      backgroundColor: Theme.palette.primary.main,
      boxShadow: "none",
    },
  });
  const SecondaryBtn = styled(CartButton)({
    border: "1px solid rgb(233, 69, 96)",
    background: "#fff",
    color: Theme.palette.primary.main,
    "&:hover": {
      backgroundColor: Theme.palette.primary.main,
      boxShadow: "none",
      color: Theme.palette.primary.light,
    },
  });
  const CustomGridRow = styled(Grid)({
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
  });
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
      <TextField
        multiline
        rows={6}
        fullWidth
        sx={{ margin: "8px 0" }}
      />
      <Divider sx={{ margin: "8px 0" }} />
      <TextField placeholder="Voucher" fullWidth sx={{ margin: "8px 0" }} />
      <SecondaryBtn fullWidth>Apply Voucher</SecondaryBtn>
      <Divider sx={{ margin: "8px 0" }} />
      <CustomGridRow item container>
        <TypographyMain sx={{ margin: "8px 0" }}>
          Shipping Estimates
        </TypographyMain>
      </CustomGridRow>
      {adressForm.map((form)=>(
        <FormControl key={form.id} fullWidth sx={{ margin: "8px 0" }}>
        <TypographyFormTitle>{form.title}</TypographyFormTitle>
        <Select
          defaultValue={form.placeholder}
          value={form.value}
          onChange={handleChange}
          displayEmpty
          sx={{ margin: "8px 0" }}
        >
          <MenuItem value="">
            <em>{form.placeholder}</em>
          </MenuItem>
          <MenuItem value={10}>{form.item1}</MenuItem>
          <MenuItem value={20}>{form.item2}</MenuItem>
        </Select>
      </FormControl>
      ))}
      <TypographyFormTitle>Zip Code</TypographyFormTitle>
      <TextField placeholder="3100" fullWidth sx={{ margin: "8px 0" }} />
      <SecondaryBtn fullWidth sx={{ margin: "8px 0" }}>
        Calculate Shipping
      </SecondaryBtn>
      <PrimaryBtn fullWidth>Checkout Now</PrimaryBtn>
    </PaperCustom>
  );
};

export default AddressBox;
