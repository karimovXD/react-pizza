import React from "react";
import {
  CloseOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { CartPizzaType } from "../types/PizzaTypes";
import { useDispatch } from "react-redux";
import {
  addPizza,
  decrementPizza,
  removePizza,
} from "../redux/slices/cart/slice";
import { AppDispatch } from "../redux/store";

const CartPizza: React.FC<{ item: CartPizzaType }> = ({ item }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(addPizza(item));
  };

  const handleDecrement = () => {
    dispatch(decrementPizza(item));
  };

  const handleRemovePizza = () => {
    if (window.confirm("ты действительно хочешь удалить товар?")) {
      dispatch(removePizza(item));
    }
  };

  return (
    <>
      <div className="overflow-auto flex flex-col gap-3 items-center w-full justify-between py-3 border-y-[1px] ss:flex-row">
        <div className="flex items-center justify-start gap-5">
          <img
            src={item.imageUrl}
            alt="pizza"
            className="w-[60px] xs:w-[80px] h-auto"
          />
          <div className="flex flex-col leading-5 gap-1">
            <h3 className="text-black text-sm xs:text-xl font-bold">
              {item.title}
            </h3>
            <h4 className="text-secondary">
              {item.pizzaType} тесто, {item.pizzaSize} см.
            </h4>
          </div>
        </div>
        <div className="flex items-center justify-end gap-7 xs:gap-10">
          <div className="flex items-center gap-3">
            <button
              className="text-xl xs:text-3xl text-carrot"
              onClick={handleDecrement}
            >
              <MinusCircleOutlined className="hover:bg-carrot hover:text-white rounded-full transition" />
            </button>
            <h4 className="font-bold text-lg leading-5">{item.count}</h4>
            <button
              className="text-xl xs:text-3xl text-carrot"
              onClick={handleIncrement}
            >
              <PlusCircleOutlined className="hover:bg-carrot hover:text-white rounded-full transition" />
            </button>
          </div>
          <h3 className="text-black text-lg xs:text-xl font-bold">
            {item.price} ₽
          </h3>
          <button
            className="text-secondary w-[24px] h-[24px] xs:w-[32px] xs:h-[32px] rounded-full border border-secondary hover:border-2 font-bold"
            onClick={handleRemovePizza}
          >
            <CloseOutlined className="w-[10px]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPizza;
