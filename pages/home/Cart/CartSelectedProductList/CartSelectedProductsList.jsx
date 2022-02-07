import { Stack } from "@mui/material";
import CartSelectedProductCard from "../CartSelectedProductCard/CartSelectedProductCard";
import {useSelector} from "react-redux";

const CartSelectedProductsList = () => {
  const items = useSelector((state) => state.cart.items)
  return (
    <Stack>
      {items.map((product) => (
        <CartSelectedProductCard
          image={product.images[0].image}
          number={product.number}
          price={product.price}
          name={product.name}
          key={product.id}
        />
      ))}
    </Stack>
  );
};
export default CartSelectedProductsList;
