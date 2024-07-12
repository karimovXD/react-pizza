import { PizzaType } from "../types/PizzaTypes";
import { AxiosInstance } from "./AxiosInstance";

export const FetchPizzas = {
  getPizzas: async (categoryIndex: number, sortBy: string): Promise<PizzaType[]> => {
    const response = await AxiosInstance.get<PizzaType[]>(`/items?${categoryIndex > 0 ? `category=${categoryIndex}` : ''}&sortBy=${sortBy}&order=desc`);
    return response.data;
  },
};
