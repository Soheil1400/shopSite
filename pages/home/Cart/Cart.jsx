import styled from "@emotion/styled";
import { useSelector } from "react-redux";

import { Typography, Divider, Drawer, Grid } from "@mui/material";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import CartButton from "./CartButton/CartButton";
import NoProduct from "./NoProduct/NoProduct";
import CartSelectedProductsList from "./CartSelectedProductList/CartSelectedProductsList";
import Theme from "../../../theme/theme";

const Cart = ({ state, setState }) => {
  const items = useSelector((state) => state.cart.items);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const DrowerContainer = styled(Grid)({
    height: "85%",
    width: "380px",
    overflowY:"auto"
  });
  const Header = styled(Grid)({
    width: "74",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    padding: "20px",
  });
  const TypographyMain = styled(Typography)({
    color: Theme.palette.secondary.dark,
    fontWeight: "600",
    fontSize: "16px",
    marginLeft: "0.5rem",
  });
  const CustomGrid = styled(Grid)({
    flexDirection: "column",
    justifyContent: "space-between",
 
  });
  return (
    <Drawer
      anchor={"right"}
      open={state["right"]}
      onClose={toggleDrawer("right", false)}
    >
      <DrowerContainer role="presentation">
        <CustomGrid container>
          <Header>
            <ShoppingBagOutlinedIcon
              sx={{ fontSize: 28, color: Theme.palette.secondary.dark }}
            />
            <TypographyMain>
              {items.reduce((count, item) => {
                count = count + item.count;
                return count;
              }, 0)}{" "}
              items
            </TypographyMain>
          </Header>
          <Divider />
          <CartSelectedProductsList />
        </CustomGrid>
        <NoProduct />
      </DrowerContainer>
      <CartButton/>
    </Drawer>
  );
};
export default Cart;
