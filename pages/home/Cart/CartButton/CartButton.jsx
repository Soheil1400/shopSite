import { Stack } from "@mui/material";
import { CheckOutButton,ViewCardButton } from "../CartStyle";

const CartButton = () => {
  return (
    <Stack className="styles.cart_buttonBox">
      <CheckOutButton> CheckOut Now ($750.00)</CheckOutButton>
      <ViewCardButton>View Cart</ViewCardButton>
    </Stack>
  );
};
export default CartButton;
