import Image from "next/image";
import { useDispatch } from "react-redux";

import { Divider } from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

import {
  addToCart,
  decreaseItem,
  removeItem,
} from "../../../../redux/reducer/cart.reducer";

import {
  ProductCard,
  ClearButton,
  NumberBox,
  NumberButton,
  TypographyCount,
  NumberButtonDisable,
  InformationBox,
  TypographyMain,
  TypographyGray,
  TypographyPrime,
} from "./CartSelectedProductCardStyles";

const CartSelectedProductCard = ({ image, number, price, name, product }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ProductCard>
        <NumberBox>
          <NumberButton onClick={() => dispatch(addToCart(product))}>
            <AddOutlinedIcon />
          </NumberButton>
          <TypographyCount>{number}</TypographyCount>
          {number !== 1 ? (
            <NumberButton onClick={() => dispatch(decreaseItem(product))}>
              <RemoveOutlinedIcon />
            </NumberButton>
          ) : (
            <NumberButtonDisable>
              <RemoveOutlinedIcon />
            </NumberButtonDisable>
          )}
        </NumberBox>
        <Image src={image} width="100%" height="100%" m="16px 0" alt={name} />
        <InformationBox>
          <TypographyMain>{name}</TypographyMain>
          <TypographyGray>
            ${price} &times; {number}
          </TypographyGray>
          <TypographyPrime>${price * number}</TypographyPrime>
        </InformationBox>
        <ClearButton onClick={() => dispatch(removeItem(product))}>
          <ClearOutlinedIcon fontSize="small" />
        </ClearButton>
      </ProductCard>
      <Divider />
    </>
  );
};
export default CartSelectedProductCard;
