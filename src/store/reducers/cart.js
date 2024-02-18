import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
		addToCart(state,action){
			const product = state.find((item) => item.id === action.payload.id)

		    product 
				? (product.quantity += 1)
				: state.push({...action.payload, quantity: 1})
		},

		removeFromCart(state, action){
			return state.find((item) => item.id !== action.payload)
		},

		modifyQuantityOfAnItem(state,action){
			const productIndex = state.findIndex(item => item.id === action.payload.id) // -----> State is an array 
			state[productIndex].quantity = action.payload.quantity
		},

		clearCart(){ // -----> clearCart does not need state and action  SO PARAMETER X   
			return [];
		}
	}
});

export const {addToCart, removeFromCart, modifyQuantityOfAnItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;