import { styled } from "@mui/material/styles";
import { useState } from "react";
import {
  Grid,
  IconButton,
  Paper,
  Typography,
  Divider,
  Chip,
  TextField,
  Button,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Theme from "../../../../theme/theme";

const AddressBox = ({ product }) => {
  const [age, setAge] = useState("");
  const [state, setState] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
    setState(event.target.value);
  };
  const PaperCustom = styled(Paper)({
    alignItems: "center",
    justifyContent: "center",
    padding: "24px 28px",
    borderRadius: "10px",
    margin: "auto",
    boxShadow: " rgb(3 0 71 / 9%) 0px 1px 3px",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "rgb(3 0 71 / 9%) 0px 8px 45px",
    },
  });
  const TypographyMain = styled(Typography)({
    color: Theme.palette.secondary.dark,
  });
  const TypographyGray = styled(Typography)({
    color: Theme.palette.secondary.light,
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
  const CheckOutButton = styled(CartButton)({
    border: "none",
    background: "rgb(233, 69, 96)",
    color: "rgb(255, 255, 255)",
    "&:hover": {
      backgroundColor: "rgb(233, 69, 96)",
      boxShadow: "none",
    },
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

  return (
    <PaperCustom>
      <Grid
        item
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        xs={12}
        lg={3.99}
      >
        <TypographyGray fontSize="14px">Total:</TypographyGray>
        <TypographyMain
          sx={{ fontSize: "18px", fontWeight: "600", lineHeight: "1" }}
        >
          $750.0000
        </TypographyMain>
      </Grid>
      <Divider sx={{ margin: "8px 0" }} />
      <Grid
        item
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        my="16px"
      >
        <TypographyMain fontSize="14px" fontWeight="600">
          Additional Comments
        </TypographyMain>
        <CustomChip label="Note" />
      </Grid>
      <TextField
        id="outlined-multiline-static"
        multiline
        rows={4}
        fullWidth
        sx={{ margin: "8px 0" }}
      />
      <Divider sx={{ margin: "8px 0" }} />
      <TextField placeholder="Voucher" fullWidth sx={{ margin: "8px 0" }} />
      <ViewCardButton fullWidth>Apply Voucher</ViewCardButton>
      <Divider sx={{ margin: "8px 0" }} />
      <Grid
        item
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <TypographyMain
          fontSize="14px"
          fontWeight="600"
          sx={{ margin: "8px 0" }}
        >
          Shipping Estimates
        </TypographyMain>
      </Grid>
      <FormControl fullWidth sx={{ margin: "8px 0" }}>
        <TypographyGray>Country</TypographyGray>
        <Select
          defaultValue="Select Country"
          value={age}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="">
            <em>Select Country</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ margin: "8px 0" }}>
        <TypographyGray>State</TypographyGray>
        <Select
          placeholder="Select State"
          defaultValue="Select State"
          value={state}
          onChange={handleChange}
        >
          <MenuItem value={10}>New York</MenuItem>
          <MenuItem value={20}>Chigaco</MenuItem>
        </Select>
      </FormControl>
      <TextField placeholder="3100" fullWidth sx={{ margin: "8px 0" }} />
      <ViewCardButton sx={{ margin: "8px 0" }} fullWidth>
        Calculate Shipping
      </ViewCardButton>
      <CheckOutButton fullWidth>Checkout Now</CheckOutButton>
    </PaperCustom>
  );
};

export default AddressBox;
