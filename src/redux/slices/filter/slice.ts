import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { InitialStateType } from "./type";

const initialState: InitialStateType = {
    categoryIndex: 0,
    sortBy: 'rating',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryTitle: (state, action: PayloadAction<string>) => {
            state.sortBy = action.payload;
        },
        setCategoryIndex: (state, action: PayloadAction<number>) => {
            state.categoryIndex = action.payload
        }
    }
})

export const { setCategoryTitle, setCategoryIndex } = filterSlice.actions;
export default filterSlice.reducer