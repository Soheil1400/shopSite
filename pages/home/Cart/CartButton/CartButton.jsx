import { Stack,Button} from "@mui/material";
import styled from "@emotion/styled";

const CartButton = () => {
  const CheckOutButton = styled(Button)({
    height: "40",
    lineHeight: "1",
    border: "none",
    background: "rgb(233, 69, 96)",
    color: "rgb(255, 255, 255)",
    borderRadius: "5",
    padding: " 11px 1.5rem",
    margin: "0px 1rem 0.75rem",
    '&:hover': {
      backgroundColor: "rgb(233, 69, 96)",
      boxShadow: 'none',
    },
  });
  const ViewCardButton = styled(Button)({
    height: "40",
    lineHeight: "1",
    border: "none",
    background: "transparent",
    color: " rgb(233, 69, 96)",
    borderRadius: "5",
    padding: " 11px 1.5rem",
    margin: "0px 1rem 0.75rem",
    '&:hover': {
      backgroundColor: "rgb(233, 69, 96)",
      boxShadow: 'none',
    },
  });
  return (
    <Stack className="styles.cart_buttonBox">
      <CheckOutButton> CheckOut Now ($750.00)</CheckOutButton>
      <ViewCardButton>View Cart</ViewCardButton>
    </Stack>
  );
};
export default CartButton;
