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

export type InitialStateType = {
    pizzas: PizzaType[] | [];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

export enum Status {
    IDLE = 'idle',
    LOADING = 'loading',
    SUCCEEDED = 'succeeded',
    FAILED = 'failed'
}