/*

// -----> REACT REDUX TOOLKIT  Part 01 

export const addToCart = (product) => {
    return {
        type: "cart/addToCart",
        payload: product
    }
}

export const removeFromCart = (productId) => {
    return {
        type: "cart.removeFromCart",
        payload: productId
    }
}

export const modifyQuantityOfAnItem = (obj) => {
    return {
        type: "cart/modifyQuantityOfAnItem",
        payload: obj,
    }
}

export const clearCart = () => {
    return {
        type: "cart/clearCart"
    }
}

*/

// -----> REACT REDUX TOOLKIT  Part 02  

import { createAction } from "@reduxjs/toolkit";

export const addToCart = createAction("cart/addRoCart");
export const removeFromCart = createAction("cart/removeFromCart");
export const modifyQuantityOfAnItem = createAction(
  "cart/modifyQuantityOfAnItem"
);
export const clearCart = createAction("cart/clearCart");
