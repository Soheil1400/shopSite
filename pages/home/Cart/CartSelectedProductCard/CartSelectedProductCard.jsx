import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { NumberButton } from "../CartStyle";
import styles from "../cart.style.module.css";

const CartSelectedProductCard = ({ image, number, price, name }) => {
  return (
    <Card className={styles.cart_productCard}>
      <Stack style={{ alignItems: "center" }}>
        <NumberButton>
          <AddOutlinedIcon fontSize="small" />
        </NumberButton>
        <p>{number}</p>
        <NumberButton>
          <RemoveOutlinedIcon fontSize="small" />
        </NumberButton>
      </Stack>
      <img
        className={styles.cart_productCard_image}
        src={image}
        alt="Porsche2020"
      />
      <div className={styles.cart_productCard_price}>
        <h5 style={{color:" rgb(43, 52, 69)}"}}>{name}</h5>
        <span style={{ font: "10" ,color: "rgb(125, 135, 156)"}}>
          {price} * {number}
        </span>
        <h5 style={{color: "rgb(233, 69, 96)"}}> {price}</h5>
      </div>
      <ClearOutlinedIcon className={styles.card_productCard_delete} />
    </Card>
  );
};
export default CartSelectedProductCard;
