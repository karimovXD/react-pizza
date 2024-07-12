import { createAsyncThunk } from '@reduxjs/toolkit'
import { PizzaType } from './types';
import { FetchPizzas } from '../../../service/FetchPizzas'

export const servicePizza = createAsyncThunk('/pizza/fetchPizzaStatus', async (params: { sortBy: string, categoryIndex: number }): Promise<PizzaType[]> => {
    const { categoryIndex, sortBy } = params;

    const data = await FetchPizzas.getPizzas(categoryIndex, sortBy);
    return data
})