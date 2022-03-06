import { useState } from "react";

import {MenuItem,FormControl,Select} from "@mui/material";

import { TypographyFormTitle } from "./AdressBoxStyle";
import { adressForm } from "./AdressBoxData";

const AddressBoxForm = () => {
  const [adress, setAdress] = useState("");
  const handleChange = (event) => {
    setAdress(event.target.value);
  };
  return (
    <>
      {adressForm.map((form) => (
        <FormControl key={form.id} fullWidth sx={{ margin: "8px 0" }}>
          <TypographyFormTitle>{form.title}</TypographyFormTitle>
          <Select
            defaultValue={form.placeholder}
            value={adress}
            onChange={handleChange}
            displayEmpty
            sx={{ margin: "8px 0" }}
          >
            <MenuItem value="">
              <em>{form.placeholder}</em>
            </MenuItem>
            <MenuItem value="10">{form.item1}</MenuItem>
            <MenuItem value="20">{form.item2}</MenuItem>
          </Select>
        </FormControl>
      ))}
    </>
  );
};

export default AddressBoxForm
