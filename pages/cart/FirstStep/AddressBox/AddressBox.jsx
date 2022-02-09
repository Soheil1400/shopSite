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
  const TypographyGray = styled(Typography)({
    color: Theme.palette.secondary.light,
    fontSize: "14px",
  });
  const TypographyFormTitle = styled(Typography)({
    color: Theme.palette.secondary.dark,
    fontSize: "0.875rem",
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
        <TypographyMainTotal
          sx={{ fontSize: "18px", fontWeight: "600", lineHeight: "1" }}
        >
          ${items.reduce((price, item) => {
            price = price + item.count * item.price;
            return price;
          }, 0)}.00
        </TypographyMainTotal>
      </CustomGridRow>
      <Divider sx={{ margin: "8px 0" }} />
      <CustomGridRow item container my="16px">
        <TypographyMain>
          Additional Comments
        </TypographyMain>
        <CustomChip label="Note" />
      </CustomGridRow>
      <TextField
        id="outlined-multiline-static"
        multiline
        rows={4}
        fullWidth
        sx={{ margin: "8px 0" }}
      />
      <Divider sx={{ margin: "8px 0" }} />
      <TextField placeholder="Voucher" fullWidth sx={{ margin: "8px 0" }} />
      <PrimaryBtn fullWidth>Apply Voucher</PrimaryBtn>
      <Divider sx={{ margin: "8px 0" }} />
      <CustomGridRow item container>
        <TypographyMain
          fontSize="14px"
          fontWeight="600"
          sx={{ margin: "8px 0" }}
        >
          Shipping Estimates
        </TypographyMain>
      </CustomGridRow>
      <FormControl fullWidth sx={{ margin: "8px 0" }}>
        <TypographyFormTitle>Country</TypographyFormTitle>
        <Select
          defaultValue="Select Country"
          value={country}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="">
            <em>Select Country</em>
          </MenuItem>
          <MenuItem value={10}>New York</MenuItem>
          <MenuItem value={20}>Chigaco</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ margin: "8px 0" }}>
        <TypographyFormTitle>State</TypographyFormTitle>
        <Select
          defaultValue="Select State"
          value={state}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="">
            <em>Select State</em>
          </MenuItem>
          <MenuItem value={10}>New York</MenuItem>
          <MenuItem value={20}>Chigaco</MenuItem>
        </Select>
      </FormControl>
      <TypographyFormTitle>Zip Code</TypographyFormTitle>
      <TextField placeholder="3100" fullWidth sx={{ margin: "8px 0" }} />
      <SecondaryBtn fullWidth sx={{margin:"8px 0"}}>
        Calculate Shipping
      </SecondaryBtn>
      <PrimaryBtn fullWidth>Checkout Now</PrimaryBtn>
    </PaperCustom>
  );
};

export default AddressBox;
