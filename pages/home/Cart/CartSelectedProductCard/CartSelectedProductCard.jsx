import styled from "@emotion/styled";
import Image from "next/image";
import { useDispatch } from "react-redux";

import { Stack, IconButton, Divider, Card, Typography } from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

import Theme from "../../../../theme/theme";
import {
  addToCart,
  decreaseItem,
  removeItem,
} from "../../../../redux/reducer/cart.reducer";

const CartSelectedProductCard = ({ image, number, price, name, product }) => {
  const dispatch = useDispatch();
  const ProductCard = styled(Card)({
    maxWidth: "380px",
    height: "128px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px",
    boxShadow: "none",
  });

  const NumberBox = styled(Stack)({
    alignItems: "center",
    padding: "5px",
    background: "transparent",
  });

  const NumberButton = styled(IconButton)({
    padding: "5px",
    background: "transparent",
    color: Theme.palette.primary.main,
    border: "1px solid rgb(255, 225, 230)",
    borderRadius: "100%",
    "&:hover": {
      backgroundColor: Theme.palette.primary.main,
      boxShadow: "none",
      color: Theme.palette.primary.light,
    },
  });
  const NumberButtonDisable = styled(IconButton)({
    padding: "5px",
    backgroundColor: "rgb(218, 225, 231)",
    color: "rgb(125, 135, 156)",
    border: "1px solid rgb(218, 225, 231)",
    borderRadius: "100%",
    cursor: "unset",
    "&:hover": {
      backgroundColor: "rgb(218, 225, 231)",
      color: "rgb(125, 135, 156)",
      boxShadow: "none",
    },
  });
  const InformationBox = styled(Stack)({
    width: "170px",
    padding: "5",
    background: "transparent",
  });

  const ClearButton = styled(IconButton)({
    color: "rgb(125, 135, 156)",
    fontSize: "16",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "transparent",
      boxShadow: "none",
      color: "rgb(125, 135, 156)",
    },
  });
  const TypographyMain = styled(Typography)({
    color: Theme.palette.secondary.dark,
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: "1",
    margin: "3px 0",
  });
  const TypographyCount = styled(Typography)({
    color: Theme.palette.secondary.dark,
    fontSize: "15px",
    fontWeight: 600,
    margin: "3px 0",
  });
  const TypographyGray = styled(Typography)({
    color: Theme.palette.secondary.light,
    fontSize: "10px",
  });
  const TypographyPrime = styled(Typography)({
    color: Theme.palette.primary.main,
    fontWeight: "600",
    fontSize: "14px",
    marginTop: "4px",
  });
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
        <ClearButton>
          <ClearOutlinedIcon
            fontSize="small"
            onClick={() => dispatch(removeItem(product))}
          />
        </ClearButton>
      </ProductCard>
      <Divider />
    </>
  );
};
export default CartSelectedProductCard;
