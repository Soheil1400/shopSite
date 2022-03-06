import Image from "next/image";
import Link from "next/link";
import {Grid, useMediaQuery} from "@mui/material";
import { CustomGridColumn } from "./CartProductStyle";
import RemoveButton from "./RemoveButton";

const CartImage = ({ product }) => {
  const Mobile = useMediaQuery("(min-width:750px)");
  return (
    <CustomGridColumn item width={Mobile === true ? "140px" : "100%"} position="relative">
      <Link href={`/product/${encodeURIComponent(product.id)}`} passHref>
        <Grid>
          <Image alt={product.title} src={product.images[0].image}/>
        </Grid>
      </Link>
      <RemoveButton product={product} />
    </CustomGridColumn>
  );
};

export default CartImage;
