import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filter/slice';
import cartSlice from './slices/cart/slice';
import pizzasSlice from './slices/pizza/slice';

const store = configureStore({
    reducer: {
        filterSlice,
        cartSlice,
        pizzasSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;