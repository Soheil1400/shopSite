import styled from "@emotion/styled";
import { useSelector } from "react-redux";

import {
  Typography,
  Divider,
  Drawer,
  Grid,
  SwipeableDrawer,
} from "@mui/material";
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
    zIndex: "9999999",
    height: "100%",
    width: "380px",
    display: " flex",
    flexDirection: "column",
    justifyContent: "space-between",
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
  return (
    // <Drawer
    //   anchor={"right"}
    //   open={state["right"]}
    //   onClose={toggleDrawer("right", false)}
    // >
    <SwipeableDrawer
      anchor={"right"}
      open={state["right"]}
      onClose={toggleDrawer("right", false)}
      anchor="bottom"
      onOpen={toggleDrawer(true)}
      disableSwipeToOpen={false}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <DrowerContainer>
        <Grid
          item
          role="presentation"
          onClick={toggleDrawer("right", false)}
          onKeyDown={toggleDrawer("right", false)}
        >
          <Header sx={{ zIndex: "999" }}>
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
          <Divider sx={{ zIndex: "999" }} />
          <NoProduct sx={{ zIndex: "999" }} />
          <CartSelectedProductsList sx={{ zIndex: "999" }} />
        </Grid>
        <CartButton sx={{ zIndex: "999" }} />
      </DrowerContainer>
    </SwipeableDrawer>
    // </Drawer>
  );
};
export default Cart;
