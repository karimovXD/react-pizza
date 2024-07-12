import React from "react";
import { Layout, message } from "antd";
import { ShoppingCartOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

//components
import Header from "../components/Header";
import EmptyCart from "../components/EmptyCart";
import CartPizza from "../components/CartPizza";

//type
import { CartPizzaType } from "../types/PizzaTypes";
import { clearPizza } from "../redux/slices/cart/slice";
import { AppDispatch, RootState } from "../redux/store";

const Cart: React.FC = () => {
  //redux
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state: RootState) => state.cartSlice
  );

  const dispatch: AppDispatch = useDispatch();

  const handleRemoveAllPizzas = () => {
    if (window.confirm("ты действительно хочешь удалить все товары?")) {
      dispatch(clearPizza());
    }
  };

  const handleBuyPizzas = () => {
    dispatch(clearPizza());
    message.success("спасибо за заказ 😋");
  };

  return (
    <Layout className="w-full h-auto rounded-xl bg-white xxxl:w-[1540px] m-auto">
      <Header hidden="hidden" />
      <Layout.Content className="px-[50px] py-5 flex flex-col gap-3">
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <div className="flex flex-col gap-2 items-start xs:items-center justify-between xs:flex-row">
              <h1 className="text-xl ss:text-2xl font-bold">
                <ShoppingCartOutlined /> Корзина
              </h1>
              <h3
                className="text-secondary cursor-pointer hover:text-gray-500 transition"
                onClick={handleRemoveAllPizzas}
              >
                <DeleteOutlined /> Очистить корзину
              </h3>
            </div>
            <div className="py-3 xs:w-full overflow-auto">
              {cart?.map((item: CartPizzaType, i: number) => (
                <CartPizza key={i} item={item} />
              ))}
            </div>
            <div className="flex flex-col justify-start gap-7">
              <div className="text-xs xs:text-sm ss:text-xl flex flex-col xs:flex-row items-start gap-1 ss:items-center justify-between">
                <h2 className="flex items-center justify-start gap-2">
                  Всего пицц:
                  <span className="font-bold">{totalQuantity}шт.</span>
                </h2>
                <h2 className="flex items-center justify-start gap-2">
                  Сумма заказа:
                  <span className="font-bold text-carrot">{totalPrice} ₽</span>
                </h2>
              </div>
              <div className="flex flex-col gap-3 items-center justify-between ss:flex-row">
                <Link to="/" className="w-full">
                  <button className="w-full ss:w-[211px] h-[50px] ss:h-[55px] border text-secondary rounded-3xl">
                    Вернуться назад
                  </button>
                </Link>
                <button
                  className="w-full ss:w-[211px] h-[50px] ss:h-[55px] bg-carrot text-white rounded-3xl"
                  onClick={handleBuyPizzas}
                >
                  Оплатить сейчас
                </button>
              </div>
            </div>
          </>
        )}
      </Layout.Content>
    </Layout>
  );
};

export default Cart;
