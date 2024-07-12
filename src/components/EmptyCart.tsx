import React from "react";

const EmptyCart: React.FC = () => {
  return (
    <>
      <div className="px-[50px] py-10 text-center h-svh">
        <h1 className="text-2xl ss:text-3xl font-bold mt-24">
          Корзина пустая 😕
        </h1>
        <p className="text-xs xs:text-sm ss:text-lg text-secondary my-5">
          Вероятней всего, вы не заказывали ещё пиццу. <br /> Для того, чтобы
          заказать пиццу, перейди на главную страницу.
        </p>
        <img
          src="https://react-pizza-v2.vercel.app/static/media/empty-cart.db905d1f4b063162f25b.png"
          alt="Image"
          className="w-72 h-auto m-auto"
        />
      </div>
    </>
  );
};

export default EmptyCart;
