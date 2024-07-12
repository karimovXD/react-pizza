export type PizzaType = {
    id: number;
    imageUrl: string;
    title: string;
    types: string[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
    count: number;
    pizzaType?: string;
    pizzaSize?: number;
}

export type CartPizzaType = {
    id: number;
    imageUrl: string;
    title: string;
    price: number;
    count: number;
    pizzaType?: string;
    pizzaSize?: number;
}