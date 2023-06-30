import { createSlice } from "@reduxjs/toolkit";
import one from "../assets/images/shop/product7.jpg";
import two from "../assets/images/shop/product8.jpg";
import three from "../assets/images/shop/product9.jpg";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [
			{ id: 1, name: "Item 1", price: 18, quantity: 1, img: one },
			{ id: 2, name: "Item 2", price: 32, quantity: 1, img: two },
			{ id: 3, name: "Item 3", price: 64, quantity: 1, img: three },
		],
	},
	reducers: {
		addToCart: (state, action) => {
			const newItem = action.payload;
			const existingItem = state.items.find((item) => item.id === newItem.id);
			if (existingItem) {
				existingItem.quantity += newItem.quantity;
			} else {
				state.items.push({
					id: newItem.id,
					name: newItem.name,
					price: newItem.price,
					quantity: newItem.quantity,
					img: newItem.img,
				});
			}
		},

		deleteFromCart: (state, action) => {
			const itemId = action.payload;
			state.items = state.items.filter((item) => item.id !== itemId);
		},
		increment: (state, action) => {
			const itemId = action.payload;
			const item = state.items.find((item) => item.id === itemId);
			if (item) {
				item.quantity += 1;
			}
		},
		decrement: (state, action) => {
			const itemId = action.payload;
			const item = state.items.find((item) => item.id === itemId);
			if (item && item.quantity > 1) {
				item.quantity -= 1;
			}
		},
	},
});

export const { addToCart, deleteFromCart, increment, decrement } =
	cartSlice.actions;

export default cartSlice.reducer;
