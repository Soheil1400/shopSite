import { Stack, CardMedia } from "@mui/material";
import styled from "@emotion/styled";

import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { NumberButton } from "../CartStyle";
import styles from "../cart.style.module.css";

const CartSelectedProductCard = ({ image, number, price, name }) => {
  const ProductCard = styled(Card)({
    maxWidth: "380",
    height: "120",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16",
  });

  return (
    <ProductCard>
      <Stack style={{ alignItems: "center" }}>
        <NumberButton>
          <AddOutlinedIcon fontSize="small" />
        </NumberButton>
        <Typography>{number}</Typography>
        <NumberButton>
          <RemoveOutlinedIcon fontSize="small" />
        </NumberButton>
      </Stack>
      <CardMedia
        component="img"
        sx={{ width: 76, height: 76 }}
        image={image}
        alt={name}
      />
      <Stack style={{ width: "172" }}>
        <Typography style={{ color: " rgb(43, 52, 69)}" }}>{name}</Typography>
        <Typography style={{ font: "10", color: "rgb(125, 135, 156)" }}>
          {price} * {number}
        </Typography>
        <Typography style={{ color: "rgb(233, 69, 96)" }}> {price}</Typography>
      </Stack>
      <ClearOutlinedIcon
        style={{
          color: "rgb(125, 135, 156)",
          fontSize: "20",
          cursor: "pointer",
        }}
      />
    </ProductCard>
  );
};
export default CartSelectedProductCard;
