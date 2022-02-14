import { useDispatch } from "react-redux";
import Image from "next/image";
import { forwardRef } from "react";

import { useMediaQuery } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import {
  PaperCustom,
  CustomGridRow,
  CustomGridColumn,
  TypographyMain,
  TypographyCount,
  CustomBox,
} from "./CartProductStyle";
import AddButton from "./CardButtons/AddButton";
import MinusButton from "./CardButtons/MinusButton";
import CartImage from "./CartImage";
import CartInfo from "./CartInfo";
import { removeItem } from "../../../../redux/reducer/cart.reducer";

const CartProduct = ({ image, number, price, name, product }) => {
  const dispatch = useDispatch();
  const Mobile = useMediaQuery("(min-width:750px)");
  // eslint-disable-next-line react/display-name
  const SelectedProduct = forwardRef(({ onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        <Image src={product.images[0].image} />
      </a>
    );
  });
  return (
    <PaperCustom>
      <CustomGridRow container justifyContent="space-between">
        <CartImage image={image} product={product} />
        <CustomGridColumn item container xs={12} sm={9.7} p="20px">
          <CustomGridRow item container justifyContent="space-between" xs={12}>
            <TypographyMain>{name}</TypographyMain>
            <CustomBox
              display={Mobile === true ? "block" : "none"}
              onClick={() => dispatch(removeItem(product))}
            >
              <CloseOutlinedIcon />
            </CustomBox>
          </CustomGridRow>
          <CustomGridRow item container justifyContent="space-between">
            <CartInfo number={number} price={price} product={product}/>
            <CustomGridRow
              item
              container
              justifyContent="flex-end"
              alignItems="center"
              xs={6}
            >
              <MinusButton number={number} product={product} />
              <TypographyCount>{number}</TypographyCount>
              <AddButton product={product} />
            </CustomGridRow>
          </CustomGridRow>
        </CustomGridColumn>
      </CustomGridRow>
    </PaperCustom>
  );
};

export default CartProduct;
