import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import CartStepper from "./CartStepper/CartStepper";

const CartComponent = () => {
  const BoxCustom = styled(Box)({
    display: "flex",
    flexDirection: "column",
    padding: "12px",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "1200px",
    margin: "auto",
  });
  return (
    <BoxCustom>
      <CartStepper />
    </BoxCustom>
  );
};

export default CartComponent;
