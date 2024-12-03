import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Redux/CartSystem"

const Store = configureStore({
    reducer: {
        cart : cartReducer,
    },
});

export default Store;