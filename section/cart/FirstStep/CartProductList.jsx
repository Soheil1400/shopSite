import { useSelector } from "react-redux";

import CartProduct from "./CartProduct/CartProduct";

const CartProductList = () => {
  const items = useSelector((state) => state.cart.items);

  return (
    <>
      {items.map((product) => (
        <CartProduct
        image={product.images[0].image}
        number={items.filter((i) => i.id === product.id)[0].count}
        price={product.price}
        name={product.name}
        key={product.id}
        product={product}
        />
      ))}
    </>
  );
};

export default CartProductList;
