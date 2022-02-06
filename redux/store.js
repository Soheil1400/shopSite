import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer/cart.reducer";

export default configureStore({
    reducer: {
        cart: cartReducer,
    },
});