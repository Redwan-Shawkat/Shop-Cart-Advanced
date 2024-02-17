/*

// -----> REACT RAW REDUX REDUCER 

export const cartReducer = (state = [], action) => {
	switch (action.type) {
		case "cart/addToCart": {
			const product = state.find((item) => item.id === action.payload.id);

			return product
				? state.map((item) => {
						if (item.id === action.payload.id) {
							return { ...item, quantity: item.quantity + 1 };
						}

						return item;
				  })
				: [...state, { ...action.payload, quantity: 1 }];
		}

		case "cart/removeFromCart": {
			return state.filter((item) => item.id !== action.payload);
		}

		case "cart/modifyQuantityOfAnItem": {
			return state.map((item) => {
				if (item.id === action.payload.id) {
					return { ...item, quantity: action.payload.quantity };
				}

				return item;
			});
		}

		case "cart/clearCart": {
			return [];
		}

		default: {
			return state;
		}
	}
};

*/

/*

// -----> REACT REDUX TOOLKIT  Part 01 

import {createReducer} from '@reduxjs/toolkit';

export const cartReducer = createReducer([], (builder) => {
	builder
		.addCase(
			'cart/addToCart',
			(state,action) => {
				const product = state.find(item => item.id === action.payload.id)
				product 
						? product.quantity += 1
						:
						state.push({...action.payload, quantity: 1})
				}
		)

		.addCase(
			"cart/removeFromCart",
			(state,action) => {
					return state.filter((item) => item.id !== action.payload)
				}
		)

		.addCase(
			"cart/modifyQuantityOfAnItem",
			(state,action) => {
       			 const productIndex = state.findIndex(
         			 (item) => item.id === action.payload.id
        		);

       				 // state[productionIndex] = Wanted index of an array
        			state[productIndex].quantity = action.payload.quantity
      		}
		)

		.addCase("cart/clearCart", (state,action) => {
			return [];
		})

	    .addDefaultCase((state) => {
            return state;
        });	
})

*/

// -----> REACT REDUX TOOLKIT  Part 02  

import { createReducer } from "@reduxjs/toolkit";

import {addToCart, removeFromCart, modifyQuantityOfAnItem, clearCart} from '../actions/cart';

export const cartReducer = createReducer([], (builder) => {
	builder
		.addCase(addToCart, (state, action) => {
			// (or) .addCase(addToCart.type, (state, action) => {})
			const product = state.find((item) => item.id === action.payload.id);

			product 
				? (product.quantity += 1)
				: state.push({...action.payload, quantity: 1})
		})
		.addCase(removeFromCart, (state, action) => {
			// (or) .addCase(removeFromCart.type, (state, action) => {})
			return state.filter((item) => item.id!== action.payload);
		})
		.addCase(modifyQuantityOfAnItem, (state, action) => {
			// (or) .addCase(modifyQuantityOfAnItem.type, (state, action) => {})
			const productIndex = state.findIndex(
				(item) => item.id === action.payload.id
			)
			state[productIndex].quantity = action.payload.quantity;
		})
		.addCase(clearCart, (state, action) => {
			// (or) .addCase(clearCart.type, (state, action) => {})
            return [];
        })
})