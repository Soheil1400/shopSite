import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";

import { useMediaQuery } from "@mui/material";

import { CustomGridColumn } from "./CartProductStyle";
import RemoveButton from "./CardButtons/RemoveButton";

const CartImage = ({ image, product }) => {
  const Mobile = useMediaQuery("(min-width:750px)");
  const SelectedProduct = forwardRef(({ onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        <Image src={product.images[0].image} />
      </a>
    );
  });
  return (
    <CustomGridColumn
      item
      width={Mobile === true ? "140px" : "100%"}
      position="relative"
    >
      <Link href={`/product/${encodeURIComponent(product.id)}`}>
        <SelectedProduct>
          <Image src={image} />
        </SelectedProduct>
      </Link>
      <RemoveButton product={product} />
    </CustomGridColumn>
  );
};

export default CartImage;
