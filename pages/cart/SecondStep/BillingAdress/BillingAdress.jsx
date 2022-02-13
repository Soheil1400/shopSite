import { styled } from "@mui/material/styles";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { Grid, IconButton, Paper, Typography, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Theme from "../../../../theme/theme";
const billingForm = [
  { id: 1, title: "Full Name" },
  { id: 2, title: "Email Address" },
  { id: 3, title: "Phone Number" },
  { id: 4, title: "Company" },
  { id: 5, title: "Zip Code" },
];
const BillingAdress = () => {
  const [country, setCountry] = useState("");
  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  const PaperCustom = styled(Paper)({
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px 0",
    borderRadius: "10px",
    margin: "0.5rem 0",
    boxShadow: " rgb(3 0 71 / 9%) 0px 1px 3px",
  });
  const TypographyMain = styled(Typography)({
    color: Theme.palette.secondary.dark,
  });
  const TypographyGray = styled(Typography)({
    color: Theme.palette.secondary.light,
  });
  const CustomGridRow = styled(Grid)({
    direction: "row",
    wrap: "nowrap",
  });
  const CustomGridColumn = styled(Grid)({
    direction: "column",
    justifyContent: "space-between",
    alignItems: "center",
    wrap: "nowrap",
  });
  const TypographyFormTitle = styled(Typography)({
    color: Theme.palette.secondary.dark,
    fontSize: "0.875rem",
    marginBottom:"-10px"
  });
  return (
    <PaperCustom sx={{ padding: "1.5rem 1.75rem" }}>
      <TypographyMain fontWeight="600" mb="16px">Billing Address</TypographyMain>
      <CustomGridRow
        container
        alignItems="flex-start"
        spacing={1}
      >
        {billingForm.map((form) => (
          <Grid item xs={6} fullWidth key={form.id}>
            <TypographyFormTitle>{form.title}</TypographyFormTitle>
            <TextField
              fullWidth
              sx={{ margin: "8px 0" }}
            />
          </Grid>
        ))}
        <Grid item xs={6} fullWidth>
          <FormControl fullWidth>
            <TypographyFormTitle>Country</TypographyFormTitle>
            <Select
              defaultValue="Select Country"
              value={country}
              onChange={handleChange}
              displayEmpty
              sx={{ margin: "8px 0" }}
            >
              <MenuItem value="">
                <em>Select Country</em>
              </MenuItem>
              <MenuItem value="10">Ten</MenuItem>
              <MenuItem value="20">Twenty</MenuItem>
              <MenuItem value="30">Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} fullWidth>
          <TypographyFormTitle fontSize="0.875rem">Address 1</TypographyFormTitle>
          <TextField fullWidth sx={{ margin: "8px 0" }} />
        </Grid>
        <Grid item xs={6} fullWidth>
          <TypographyFormTitle fontSize="0.875rem">Address 2</TypographyFormTitle>
          <TextField fullWidth sx={{ margin: "8px 0" }} />
        </Grid>
      </CustomGridRow>
    </PaperCustom>
  );
};
export default BillingAdress;
