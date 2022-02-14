import { useSelector } from "react-redux";

import { TextField,FormControl } from "@mui/material";

import { PaperCustom, SecondaryBtn } from "../../../../style/style";
import Payment from "./Payment";

const Vocher = () => {
  const items = useSelector((state) => state.cart.items);
  return (
    <PaperCustom>
      <Payment />
      <FormControl fullWidth>
        <TextField placeholder="Voucher" sx={{ margin: "8px 0" }} />
      </FormControl>
      <SecondaryBtn fullWidth>Apply Voucher</SecondaryBtn>
    </PaperCustom>
  );
};

export default Vocher;
