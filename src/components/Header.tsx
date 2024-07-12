import React from "react";
import { Layout, Badge, Avatar } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//logo
import pizzaLogo from "../assets/logos/pizza.png";
import { RootState } from "../redux/store";

const Header: React.FC<{ hidden: "flex" | "hidden" }> = ({ hidden }) => {
  const { totalQuantity, totalPrice } = useSelector(
    (state: RootState) => state.cartSlice
  );

  return (
    <>
      <Layout.Header className="bg-white rounded-xl h-auto border-b-[1px] flex items-start sm:items-center justify-between py-10 gap-6 flex-col sm:flex-row">
        <Link to="/">
          <div className="flex items-center justify-start h-full gap-3">
            <img src={pizzaLogo} alt="" />
            <div className="flex flex-col items-start justify-between leading-5">
              <h2 className="font-extrabold text-xl">REACT PIZZA</h2>
              <h4 className="font-light text-[#7B7B7B]">
                самая вкусная пицца во вселенной
              </h4>
            </div>
          </div>
        </Link>
        <div className={`${hidden}`}>
          <Link to="/cart">
            <div className="leading-5 flex items-center justify-end bg-carrot px-4 rounded-2xl text-white">
              <h3>{totalPrice} ₽</h3>
              <span className="w-[0.1px] h-[15px] ml-3 mr-1 bg-slate-100"></span>
              <Badge count={totalQuantity}>
                <Avatar
                  shape="square"
                  size="large"
                  className="bg-carrot"
                  icon={<ShoppingCartOutlined />}
                />
              </Badge>
            </div>
          </Link>
        </div>
      </Layout.Header>
    </>
  );
};

export default Header;
