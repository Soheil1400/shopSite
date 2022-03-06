import { useSelector } from "react-redux";

import { Stack} from "@mui/material";

import CartSelectedProductCard from "./CartSelectedProductCard";

const CartSelectedProductsList = () => {
  const items = useSelector((state) => state.cart.items);
  return (
    <Stack>
      {items.map((product) => (
        <CartSelectedProductCard
          image={product.images[0].image}
          number={items.filter((i) => i.id === product.id)[0].count}
          price={product.sale === true ? (product.price * (100 - product.MSale)) / 100 : product.price}
          name={product.name}
          key={product.id}
          product={product}
        />
      ))}
    </Stack>
  );
};
export default CartSelectedProductsList;
