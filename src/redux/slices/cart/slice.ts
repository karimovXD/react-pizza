import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartPizzaType, initialStateType } from "./types";

const initialState: initialStateType = {
    cart: [],
    totalPrice: 0,
    totalQuantity: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addPizza: (state, action: PayloadAction<CartPizzaType>) => {
            const findPizza = state.cart.find((item): false | true => item.id === action.payload.id);
            if (findPizza) {
                findPizza.count += 1
            } else {
                state.cart.push({ ...action.payload, count: 1 })
            }
            state.totalQuantity = state.cart.length;
            state.totalPrice += action.payload.price;
        },

        removePizza: (state, action: PayloadAction<CartPizzaType>) => {
            state.cart = state.cart.filter((item: CartPizzaType) => item.id !== action.payload.id);
            state.totalQuantity = state.cart.length;

        },
        clearPizza: (state) => {
            state.cart = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
        decrementPizza: (state, action: PayloadAction<CartPizzaType>) => {
            const findPizza = state.cart.find((item) => item.id === action.payload.id);

            if (findPizza) {
                if (findPizza.count <= 1) {
                    findPizza.count = 1
                    state.totalPrice = action.payload.price
                }
                findPizza.count -= 1;
                state.totalPrice -= action.payload.price;
            }
        }
    }
})

export const { addPizza, removePizza, clearPizza, decrementPizza } = cartSlice.actions;
export default cartSlice.reducer;