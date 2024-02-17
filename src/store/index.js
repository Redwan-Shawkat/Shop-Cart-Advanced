import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import { cartReducer } from "./reducers/cart"; //[Raw Redux REducer]

import {configureStore} from '@reduxjs/toolkit'

import {cartReducer} from './reducers/cart';

const counterReducer = (state = 20, action) => {
	switch (action.type) {
		case "increment": {
			return state + action.payload;
		}

		case "decrement": {
			return state - action.payload;
		}

		default: {
			return state;
		}
	}
};

const initState = {
	bgColor: "#fff",
	textColor: "#000",
};
const themeReducer = (state = initState, action) => {
	switch (action.type) {
		case "theme/changeBgColor": {
			return {
				...state,
				bgColor: action.payload,
			};
		}

		case "theme/changeTextColor": {
			return {
				...state,
				textColor: action.payload,
			};
		}

		case "theme/reset": {
			return initState;
		}

		default: {
			return state;
		}
	}
};

/*
[Part of Raw Redux]
const rootReducer = combineReducers({
	counter: counterReducer,
	theme: themeReducer,
	cart: cartReducer,
});

export const store = createStore(rootReducer);
[Part of Raw Redux]
*/

const rootReducer = {
	counter: counterReducer,
	theme: themeReducer,
	cart: cartReducer
}

export const store = configureStore({
	reducer: rootReducer
})