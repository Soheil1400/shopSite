import { styled } from "@mui/material/styles";
import { Grid, IconButton, Paper, Typography, Box } from "@mui/material";
import Theme from "../../../../theme/theme";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { forwardRef, useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "@mui/material";

const CartProduct = ({ product }) => {
  const closeIcon = useMediaQuery("(min-width:600px)");
  const PaperCustom = styled(Paper)({
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px 0",
    borderRadius: "10px",
    margin: "0.5rem 0",
    boxShadow: " rgb(3 0 71 / 9%) 0px 1px 3px",
  });
  const TypographyMain = styled(Typography)({
    color: Theme.palette.secondary.dark,
    fontSize: "18px",
    fontWeight: "600",
    lineHeight: "1",
  });
  const TypographyGray = styled(Typography)({
    color: Theme.palette.secondary.light,
  });
  const TypographyPrime = styled(Typography)({
    color: Theme.palette.primary.main,
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
  return (
    <PaperCustom>
      <CustomGridRow container  justifyContent="space-between">
        <CustomGridColumn item xs={12} sm={3} position="relative">
          <Link href={`/product/${encodeURIComponent(product.id)}`}>
            <Image src={product.images[0].image} />
          </Link>
          <Box
            display={closeIcon === true ? "none" : "block"}
            sx={{ position: "absolute", right: "15px", top: "15px" }}
          >
            <CloseOutlinedIcon />
          </Box>
        </CustomGridColumn>
        <CustomGridColumn item container xs={12} sm={9} p="20px">
          <CustomGridRow item container justifyContent="space-between" xs={12}>
            <TypographyMain>{product.name}</TypographyMain>
            <Typography sx={{ cursor: "pointer" }} variant="body2">
              <Box display={closeIcon === true ? "block" : "none"}>
                <CloseOutlinedIcon />
              </Box>
            </Typography>
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
                ${product.sale === true ? `${product.price}.00` : ""}
              </TypographyGray>{" "}
              <TypographyGray component={"span"} mx={0.5}>
                *1
              </TypographyGray>{" "}
              <TypographyPrime component={"span"} mx={0.5}>
                ${product.sale === true ? `${product.price}.00` : ""}
              </TypographyPrime>
            </CustomGridRow>
            <CustomGridRow
              item
              container
              justifyContent="flex-end"
              alignItems="center"
              xs={6}
            >
              <PMButton>
                <RemoveIcon />
              </PMButton>
              <TypographyMain
                sx={{
                  fontSize: "14px",
                  lineHeight: "1",
                  margin: "0 8px",
                }}
              >
                1
              </TypographyMain>
              <PMButton>
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
