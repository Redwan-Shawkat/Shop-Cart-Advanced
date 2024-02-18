import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./reducers/cart"; //যে কোনো নামে import নেয়া যাবে

const  rootReducer = {
	cart: cartReducer,
}

export const store = configureStore({
    reducer: rootReducer,
});