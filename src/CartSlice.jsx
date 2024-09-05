import {createSlice} from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
    },
    reducers: {
        addItem: (state, action) => {
            const {name, image, cost} = action.payload;
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({name, image, cost, quantity: 1});
            }
        },
        removeItem: (state, action) => {
            // state.items = state.items.filter(item => item.name !== action.payload);
            const name = action.payload;
            for (let i = 0; i < state.items.length; i++) {
                if (name === state.items[i].name) {
                    state.items.splice(i, 1);
                    return;
                }
            }
        },
        updateQuantity: (state, action) => {
            const {name, change} = action.payload;
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem) {
                const newQuant = existingItem.quantity + change;
                if (newQuant >= 0) {
                    existingItem.quantity = newQuant;
                }
            }

        },
    },
});

export const {addItem, removeItem, updateQuantity} = CartSlice.actions;

export default CartSlice.reducer;
