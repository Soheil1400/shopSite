import { ProductData } from "../../../../data/Productdata";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import CartProduct from "../CartProduct/CartProduct";
import { useSelector } from "react-redux";
const CartProductList = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <>
      {items.map((product) => (
        <CartProduct
          product={product}
          image={product.images[0].image}
          number={items.filter(i => i.id === product.id)[0].count}
          price={product.price}
          name={product.name}
          key={product.id}
        />
      ))}
    </>
  );
};

export default CartProductList;
