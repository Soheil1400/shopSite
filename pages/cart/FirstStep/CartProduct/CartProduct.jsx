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
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
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
  const GridCustomHead = styled(Grid)({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "1rem 0",
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
  return (
    <Paper sx={{ p: 2, margin: "auto", maxWidth: 500, flexGrow: 1 }}>
      <Grid container spacing={2} direction="row" flexWrap="nowrap">
        <Grid item xs={2}>
          <Link href={`/product/${encodeURIComponent(product.id)}`}>
            <selectedProduct>
              <Image src={product.images[0].image} />
            </selectedProduct>
          </Link>
        </Grid>
        <Grid item xs={10} container>
          <Grid item xs container direction="row" spacing={2}>
            <Grid item xs={12}>
              <TypographyMain>{product.name}</TypographyMain>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                Remove
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TypographyGray
                sx={{ textDecoration: "line-through" }}
                component={"span"}
                mx={0.5}
              >
                {product.sale === true ? `${product.price}.00` : ""}
              </TypographyGray>{" "}
              <PMButton>
                <AddIcon />
              </PMButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CartProduct;
