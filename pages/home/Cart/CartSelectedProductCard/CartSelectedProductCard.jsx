import styled from "@emotion/styled";

import Card from "@mui/material/Card";
import { Stack, IconButton, Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseItem,
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
    color: "rgb(233, 69, 96)",
    border: "1px solid rgb(255, 225, 230)",
    borderRadius: "100%",
    "&:hover": {
      backgroundColor: "rgb(233, 69, 96)",
      boxShadow: "none",
      color: "rgb(255, 255, 255)",
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
  return (
    <>
      <ProductCard>
        <NumberBox>
          <NumberButton onClick={() => dispatch(addToCart(product))}>
            <AddOutlinedIcon sx={{ fontSize: 20 }} />
          </NumberButton>
          <Typography variant="subtitle1">{number}</Typography>
          {number !== 1 ? (
            <NumberButton onClick={() => dispatch(decreaseItem(product))}>
              <RemoveOutlinedIcon sx={{ fontSize: 20 }} />
            </NumberButton>
          ) : (
            <NumberButtonDisable>
              <RemoveOutlinedIcon sx={{ fontSize: 20 }} />
            </NumberButtonDisable>
          )}
        </NumberBox>
        <Image src={image} width="100%" height="100%" m="16px 0" alt={name} />
        <InformationBox>
          <Typography variant="subtitle1" color={" rgb(43, 52, 69)}"}>
            {name}
          </Typography>
          <Typography variant="overline" color={"rgb(125, 135, 156)"}>
            {price} * {number}
          </Typography>
          <Typography variant="subtitle1" color={"rgb(233, 69, 96)"}>
            {" "}
            {price}
          </Typography>
        </InformationBox>
        <ClearButton>
          <ClearOutlinedIcon fontSize="small" />
        </ClearButton>
      </ProductCard>
      <Divider />
    </>
  );
};
export default CartSelectedProductCard;
