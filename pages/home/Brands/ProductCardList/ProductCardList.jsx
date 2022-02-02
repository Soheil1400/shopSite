import { Grid } from "@mui/material";

import BrandCard from "../BrandCard/BrandCard";
import styled from "@emotion/styled";
import ProductCard from "../ProductCard/ProductCard";

const Products = [
  {
    id: 1,
    image:
      "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F1.Ford2019.png&w=3840&q=75",
    name: "Lord 2019",
    number: 1,
    price: "$250.00",
  },
  {
    id: 2,
    image:
      "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F2.Audi2017.png&w=1920&q=75",
    name: "Lord 2019",
    number: 2,
    price: "$250.00",
  },
  {
    id: 3,
    image:
      "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F4.Porsche2018.png&w=1920&q=75",
    name: "Lord 2019",
    number: 3,
    price: "$250.00",
  },
];
const ProductCardList = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-betwen"
      alignItems="flex-start"
      spacing={4}
    >
      {Products.map((product) => (
        <Grid item xs={12} sm={6} lg={4.3} key={product.id}>
          <ProductCard
            image={product.image}
            number={product.number}
            price={product.price}
            name={product.name}
          />
        </Grid>
      ))}
    </Grid>
  );
};
export default ProductCardList;
