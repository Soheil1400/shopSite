import { Grid, Card } from "@mui/material";
import ProductCardList from "./ProductCardList/ProductCardList";
import BrandsList from "./BrandsList/BrandsList";
import { useMediaQuery } from "@mui/material";
const Brands = () => {
  const brandListMedia = useMediaQuery("(min-width:1024px)");

  return (
    <Grid
      container
      direction="row"
      wrap="nowrap"
      justifyContent="space-evenly"
      alignItems="flex-start"
      spacing={5}
    >
      <Grid item lg={3.4} display={brandListMedia === true ? "block" : "none"}>
        <BrandsList />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        lg={8.6}
      >
        <ProductCardList />
      </Grid>
    </Grid>
  );
};
export default Brands;
