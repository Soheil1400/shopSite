import { styled } from "@mui/material/styles";
import { Paper, Typography } from "@mui/material";
import Theme from "../../../../theme/theme";

import MutualContent from "../MutualContent/MutualContent.";

const ShippingAddress = () => {
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
        Shipping Address
      </TypographyMain>
      <MutualContent />
    </PaperCustom>
  );
};
export default ShippingAddress;
