import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cartItems, ItemCart } from '../../models/interfaces/CartItems';


const initialState: cartItems = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ItemCart>) => {
            state.items.push(action.payload)
        },
        removeitemCart: (state, action: PayloadAction<ItemCart>) => {
            state.items = state.items.filter(value => value.item.id !== action.payload.item.id);
        },
        incrementQuantity: (state, action: PayloadAction<ItemCart>) => {
            const itemIndex = state.items.findIndex(value => value.item.id === action.payload.item.id);
            if (itemIndex !== -1) {
                state.items[itemIndex].quantity += 1;
                state.items[itemIndex].total = state.items[itemIndex].total * state.items[itemIndex].quantity
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        decrementQuantity: (state, action: PayloadAction<ItemCart>) => {
            const itemIndex = state.items.findIndex(value => value.item.id === action.payload.item.id);
            if (itemIndex !== -1) {
                const currentItem = state.items[itemIndex];
                if (currentItem.quantity > 1) {
                    currentItem.quantity -= 1;
                    state.items[itemIndex].total = state.items[itemIndex].item.price * state.items[itemIndex].quantity
                } else {
                    state.items.splice(itemIndex, 1);
                }
            }
        },
    },
});

export const { addToCart, removeitemCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;