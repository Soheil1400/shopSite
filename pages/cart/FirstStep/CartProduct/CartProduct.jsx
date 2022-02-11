import { useDispatch } from "react-redux";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { forwardRef} from "react";
import { useMediaQuery } from "@mui/material";

import { Grid, IconButton, Paper, Typography, Box } from "@mui/material";
import Theme from "../../../../theme/theme";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import {
  addToCart,
  decreaseItem,
  removeItem,
} from "../../../../redux/reducer/cart.reducer";

const CartProduct = ({ image, number, price, name, product }) => {
  const dispatch = useDispatch();
  const Mobile = useMediaQuery("(min-width:750px)");
  const SelectedProduct = forwardRef(({ onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        <Image src={product.images[0].image} />
      </a>
    );
  });
  const PaperCustom = styled(Paper)({
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    margin: "0.5rem 0",
    boxShadow: " rgb(3 0 71 / 9%) 0px 1px 3px",
  });
  const PMButton = styled(IconButton)({
    backgroundColor: Theme.palette.primary.light,
    color: Theme.palette.primary.main,
    fontWeight: "bold",
    padding: "2px",
    textTransform: "none",
    border: "1px solid #E94560",
    boxShadow: "none",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: Theme.palette.primary.main,
      color: Theme.palette.primary.light,
    },
  });
  const PMButtonDisable = styled(IconButton)({
    fontWeight: "bold",
    padding: "2px",
    textTransform: "none",
    border: "1px solid rgb(218, 225, 231)",
    boxShadow: "none",
    borderRadius: "5px",
    backgroundColor: "rgb(218, 225, 231)",
    color: "rgb(125, 135, 156)",
    cursor: "unset",
    "&:hover": {
      backgroundColor: "rgb(218, 225, 231)",
      color: "rgb(125, 135, 156)",
      boxShadow: "none",
    },
  });
  const CustomGridRow = styled(Grid)({
    direction: "row",
    wrap: "nowrap",
  });
  const CustomGridColumn = styled(Grid)({
    direction: "column",
    justifyContent: "space-between",
    alignItems: "center",
    wrap: "nowrap",
  });

  const TypographyMain = styled(Typography)({
    color: Theme.palette.secondary.dark,
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "1",
    marginBottom: "0.5rem",
  });
  const TypographyCount = styled(Typography)({
    color: Theme.palette.secondary.dark,
    fontSize: "15px",
    fontWeight: "600",
    margin: "0 8px",
  });
  const TypographyGray = styled(Typography)({
    color: Theme.palette.secondary.light,
    fontSize: "14px",
    fontWeight: "600",
  });
  const TypographyPrime = styled(Typography)({
    color: Theme.palette.primary.main,
    fontSize: "14px",
    fontWeight: "600",
  });
  const CustomBox = styled(Box)({
    color: Theme.palette.secondary.dark,
    cursor: "pointer",
  });
  return (
    <PaperCustom>
      <CustomGridRow container justifyContent="space-between">
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
          <CustomBox
            display={Mobile === true ? "none" : "block"}
            sx={{ position: "absolute", right: "15px", top: "15px" }}
            onClick={() => dispatch(removeItem(product))}
          >
            <CloseOutlinedIcon />
          </CustomBox>
        </CustomGridColumn>
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
            <CustomGridRow
              item
              container
              alignItems="center"
              justifyContent="flex-start"
              xs={6}
            >
              <TypographyGray component={"span"} mx={0.5}>
                ${price}.00 &times; {number}
              </TypographyGray>{" "}
              <TypographyPrime component={"span"} mx={0.5}>
                ${price * number}.00
              </TypographyPrime>
            </CustomGridRow>
            <CustomGridRow
              item
              container
              justifyContent="flex-end"
              alignItems="center"
              xs={6}
            >
              {" "}
              {number === 1 ? (
                <PMButtonDisable>
                  <RemoveIcon />
                </PMButtonDisable>
              ) : (
                <PMButton onClick={() => dispatch(decreaseItem(product))}>
                  <RemoveIcon />
                </PMButton>
              )}
              <TypographyCount>{number}</TypographyCount>
              <PMButton onClick={() => dispatch(addToCart(product))}>
                <AddIcon />
              </PMButton>
            </CustomGridRow>
          </CustomGridRow>
        </CustomGridColumn>
      </CustomGridRow>
    </PaperCustom>
  );
};

export default CartProduct;
