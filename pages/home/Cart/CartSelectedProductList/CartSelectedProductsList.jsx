import { Stack } from "@mui/material";
import CartSelectedProductCard from "../CartSelectedProductCard/CartSelectedProductCard";
import styles from "../cart.style.module.css";
const products = [
  {
    id: 1,
    image:
      "https://bonik-react.vercel.app/assets/images/products/Automotive/28.Porsche2020.png",
    name: "Lord 2019",
    number: 1,
    price: "$250.00",
  },
  {
    id: 2,
    image:
      "https://bonik-react.vercel.app/assets/images/products/Automotive/28.Porsche2020.png",
    name: "Lord 2019",
    number: 2,
    price: "$250.00",
  },
  {
    id: 3,
    image:
      "https://bonik-react.vercel.app/assets/images/products/Automotive/28.Porsche2020.png",
    name: "Lord 2019",
    number: 3,
    price: "$250.00",
  },
];

const CartSelectedProductsList = () => {
  return (
    <Stack calssName={styles.cart_productCard} >
      {products.map((product) => (
        <CartSelectedProductCard
          image={product.image}
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
