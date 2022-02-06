import { styled } from "@mui/material/styles";
import {
  Chip,
  Dialog,
  Grid,
  IconButton,
  Paper,
  Typography,
  Rating,
} from "@mui/material";
import Theme from "../../../../theme/theme";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { forwardRef, useState } from "react";
import Link from "next/link";

const CartProduct = ({ product }) => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState("none");
  const selectedProduct = forwardRef(({ onClick, href }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        Click Me
      </a>
    );
  });
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
  return (
    <PaperCustom>
      <Grid container direction="row" flexWrap="nowrap" alignItems="flex-start">
        <Grid item xs={3}>
          <Link href={`/product/${encodeURIComponent(product.id)}`}>
            <selectedProduct>
              <Image src={product.images[0].image} />
            </selectedProduct>
          </Link>
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          xs={9}
          p="20px"
        >
          <Grid
            item
            container
            direction="row"
            wrap="nowrap"
            justifyContent="space-between"
            mb="30px"
          >
            <TypographyMain
              sx={{ fontSize: "18px", fontWeight: "600", lineHeight: "1" }}
            >
              {product.name}
            </TypographyMain>
            <Typography sx={{ cursor: "pointer" }} variant="body2">
              <CloseOutlinedIcon />
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            wrap="nowrap"
            justifyContent="space-between"
          >
            <Grid item container direction="row" wrap="nowrap">
              <TypographyGray component={"span"} mx={0.5}>
                {product.sale === true ? `${product.price}.00` : ""}
              </TypographyGray>{" "}
              <TypographyPrime component={"span"} mx={0.5}>
                {product.sale === true ? `${product.price}.00` : ""}
              </TypographyPrime>
            </Grid>
            <Grid
              item
              container
              direction="row"
              wrap="nowrap"
              justifyContent="flex-end"
              alignItems="center"
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
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PaperCustom>
  );
};

export default CartProduct;
