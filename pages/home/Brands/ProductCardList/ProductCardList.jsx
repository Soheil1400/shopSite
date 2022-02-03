import { Grid } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";

const Products = [
  {
    id: 1,
    image:
      "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F1.Ford2019.png&w=3840&q=75",
    name: "Lord 2019",
    number: 1,
    brand:"Ziaomi",
    numberOfRater:"50",
    status:"Stock Available",
    rated:"2.5",
    soldBy:"Mobile Store",
    price: "$250.00",
    off:true,
    offPercent:"50% off"
  },
  {
    id: 2,
    image:
      "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F2.Audi2017.png&w=1920&q=75",
    name: "Lord 2019",
    number: 2,
    brand:"Ziaomi",
    numberOfRater:"50",
    status :"Stock Available",
    rated:"2.5",
    soldBy:"Mobile Store",
    price: "$250.00",
    off:true,
    offPercent:"50% off"

  },
  {
    id: 3,
    image:
      "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F4.Porsche2018.png&w=1920&q=75",
    name: "Lord 2019",
    number: 3,
    brand:"Ziaomi",
    numberOfRater:"50",
    status :"Stock Available",
    rated:"2.5",
    soldBy:"Mobile Store",
    price: "$250.00",
    off:false,
    offPercent:""
  },
  {
    id: 4,
    image:
      "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F4.Porsche2018.png&w=1920&q=75",
    name: "Lord 2019",
    number: 3,
    brand:"Ziaomi",
    numberOfRater:"50",
    status :"Stock Available",
    rated:"2.5",
    soldBy:"Mobile Store",
    price: "$250.00",
    off:true,
    offPercent:"50% off"

  },
  {
    id: 5,
    image:
      "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F4.Porsche2018.png&w=1920&q=75",
    name: "Lord 2019",
    number: 3,
    brand:"Ziaomi",
    numberOfRater:"50",
    status :"Stock Available",
    rated:"2.5",
    soldBy:"Mobile Store",
    price: "$250.00",
    off:false,
    offPercent:""
  },
  {
    id: 6,
    image:
      "https://bonik-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FAutomotive%2F4.Porsche2018.png&w=1920&q=75",
    name: "Lord 2019",
    number: 3,
    brand:"Ziaomi",
    numberOfRater:"50",
    status :"Stock Available",
    rated:"2.5",
    soldBy:"Mobile Store",
    price: "$250.00",
    off:true,
    offPercent:"50% off"
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
        <Grid item xs={12} sm={6} md={6} lg={4} key={product.id}>
          <ProductCard
            image={product.image}
            number={product.number}
            price={product.price}
            name={product.name}
            brand={product.brand}
            numberOfRater={product.numberOfRater}
            status ={product.status}
            rated={product.rated}
            soldBy={product.soldBy}
            off={product.off}
            offPercent={product.offPercent}
          />
        </Grid>
      ))}
    </Grid>
  );
};
export default ProductCardList;
