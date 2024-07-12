import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PizzaType, InitialStateType, Status } from "./types";
import { servicePizza } from "./asyncActions";

const initialState: InitialStateType = {
    pizzas: [],
    status: Status.IDLE,
    error: null
}

const pizzasSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(servicePizza.pending, (state) => {
                state.status = Status.LOADING;
                state.pizzas = [];
            })
            .addCase(servicePizza.fulfilled, (state, action: PayloadAction<PizzaType[]>) => {
                state.status = Status.SUCCEEDED;
                state.pizzas = action.payload
            })
            .addCase(servicePizza.rejected, (state, action) => {
                state.status = Status.FAILED;
                state.pizzas = [];
                state.error = action.error.message || 'что то пошло не так'
            })
    },
})
export default pizzasSlice.reducer;