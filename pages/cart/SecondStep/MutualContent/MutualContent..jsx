import { useState } from "react";

import { Grid, TextField, FormControl, Select, MenuItem} from "@mui/material";

import {CustomGridRow,TypographyFormTitle} from "./MutualContentStyle"
import {formList} from "./MutualContentData"
const MutualContent = ({show}) => {
  const [country, setCountry] = useState("");
  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
      <CustomGridRow container alignItems="flex-start" spacing={1} display={show}>
        {formList.map((form) => (
          <Grid item xs={6} fullWidth key={form.id}>
            <TypographyFormTitle>{form.title}</TypographyFormTitle>
            <TextField sx={{ margin: "8px 0",width:"fullwidth" }} />
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
          <TypographyFormTitle fontSize="0.875rem">
            Address 1
          </TypographyFormTitle>
          <TextField fullWidth sx={{ margin: "8px 0" }} />
        </Grid>
        <Grid item xs={6} fullWidth>
          <TypographyFormTitle fontSize="0.875rem">
            Address 2
          </TypographyFormTitle>
          <TextField fullWidth sx={{ margin: "8px 0" }} />
        </Grid>
      </CustomGridRow>
  );
};
export default MutualContent;
