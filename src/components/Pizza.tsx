import React from "react";
import { Segmented } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { PizzaType, CartPizzaType } from "../types/PizzaTypes";
//redux
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../redux/slices/cart/slice";
import { AppDispatch, RootState } from "../redux/store";

const Pizza: React.FC<{ item: PizzaType }> = ({ item }) => {
  const [pizzaSize, setPizzaSize] = React.useState<number>(26);
  const [pizzaType, setPizzaType] = React.useState<string | number>("тонкое");
  const { id, title, price, imageUrl } = item;

  //redux
  const dispatch: AppDispatch = useDispatch();
  const pizzaCount = useSelector((state: RootState) =>
    state.cartSlice.cart.find((obj: CartPizzaType) => obj.id === id)
  );

  const addedCount: number = pizzaCount ? pizzaCount.count : 0;

  const handleAddPizza = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      pizzaType,
      pizzaSize,
    };
    //@ts-ignore
    dispatch(addPizza(item));
  };

  return (
    <>
      <div className="w-full ss:w-[200px] sm:w-[280px] h-auto">
        <div>
          <img
            src={item.imageUrl}
            alt=""
            className="m-auto w-[160px] h-[160px] sm:w-[240px] sm:h-[240px]"
          />
        </div>
        <h3 className="text-[20px] text-center mb-5 line-clamp-2">
          {item.title}
        </h3>
        <div className="flex flex-col mb-3 xs:mb-4">
          <Segmented
            options={item.types}
            block
            value={pizzaType}
            onChange={setPizzaType}
          />
          <Segmented
            options={item.sizes}
            block
            value={pizzaSize}
            onChange={setPizzaSize}
          />
        </div>
        <div className="flex flex-col xs:flex-row gap-3 items-center justify-between">
          <h2 className="font-bold text-xl">от {item.price} ₽</h2>
          <div
            className="w-full xs:w-auto h-auto px-3 rounded-3xl text-carrot gap-2 font-semibold cursor-pointer hover:bg-carrot hover:text-white transition-all py-2 border-2 border-carrot flex items-center justify-center"
            onClick={handleAddPizza}
          >
            <PlusOutlined />
            <h3>Добавить {addedCount > 0 && <span>{addedCount}</span>}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pizza;
