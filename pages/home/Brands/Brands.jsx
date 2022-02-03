import { Grid, Stack, Typography } from "@mui/material";
import ProductCardList from "./ProductCardList/ProductCardList";
import BrandsList from "./BrandsList/BrandsList";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const Brands = () => {
  return (
    <Stack display="flex" direction="row">
      <BrandsList />
      <Grid container>
        <Stack
          width="100%"
          padding="12px"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5" color="rgb(43, 52, 69)">Cars</Typography>
          <Stack direction="row" alignItems="center">
            <Typography variant="subtitle1" color="rgb(125, 135, 156)"> view all</Typography>
            <ArrowRightOutlinedIcon sx={{color:"rgb(125, 135, 156)", width:"16", height:"10"}}/>
          </Stack>
        </Stack>
        <ProductCardList />
      </Grid>
    </Stack>
  );
};
export default Brands;
