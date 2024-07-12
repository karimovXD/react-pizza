export type CartPizzaType = {
    id: number;
    imageUrl: string;
    title: string;
    price: number;
    count: number;
    pizzaType?: string;
    pizzaSize?: number;
}

export type initialStateType = {
    cart: CartPizzaType[];
    totalPrice: number;
    totalQuantity: number;
}