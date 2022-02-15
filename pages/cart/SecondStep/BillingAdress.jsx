import { useState } from "react";
import { styled } from "@mui/material/styles";

import { Checkbox, Paper, Typography, FormControlLabel } from "@mui/material";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import SquareIcon from "@mui/icons-material/Square";

import Theme from "../../../theme/theme";
import MutualContent from "./MutualContent.";

const BillingAdress = () => {
  const [show, setShow] = useState("flex");

  const handleHideInfo = (e) => {
    setShow(e.target.checked && show === "flex" ? "none" : "flex");
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
  return (
    <PaperCustom sx={{ padding: "1.5rem 1.75rem" }}>
      <TypographyMain fontWeight="600" mb="16px">
        Billing Address
      </TypographyMain>
      <FormControlLabel
        sx={{marginBottom:"16px"}}
        label="Same as shipping address"
        control={
          <Checkbox
            icon={<CropSquareIcon sx={{ fontSize: "18px" }} />}
            checkedIcon={
              <SquareIcon
                sx={{
                  fontSize: "14px",
                  color: "rgb(15, 52, 96)",
                  padding: "-2px",
                  border: "2px solid rgb(125, 135, 156)",
                }}
              />
            }
            checked={show === "none"}
            onChange={(e) => handleHideInfo(e)}
          />
        }
      />
      <MutualContent show={show} />
    </PaperCustom>
  );
};
export default BillingAdress;
