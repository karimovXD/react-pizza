import React from "react";
import { Layout } from "antd";
//redux
import { useSelector, useDispatch } from "react-redux";

//components
import Header from "../components/Header";
import Categories from "../components/Categories";
import Pizza from "../components/Pizza";
import Filter from "../components/Filter";
import PizzaSkeleton from "../components/Skeleton/PizzaSkeleton";
import { servicePizza } from "../redux/slices/pizza/asyncActions";
import { Status } from "../redux/slices/pizza/types";
import { AppDispatch, RootState } from "../redux/store";

const Home: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const { pizzas, status } = useSelector(
    (state: RootState) => state.pizzasSlice
  );

  const { sortBy, categoryIndex } = useSelector(
    (state: RootState) => state.filterSlice
  );

  const handleGetPizzas = async () => {
    try {
      dispatch(servicePizza({ categoryIndex, sortBy }));
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    handleGetPizzas();
  }, [categoryIndex, sortBy]);

  return (
    <>
      <Layout className="w-full h-auto rounded-xl bg-white xxxl:w-[1540px] m-auto">
        <Header hidden="flex" />
        {/* FILTERS */}
        <div className="w-full m-auto my-5 flex items-start md:items-center justify-between px-[50px] flex-col md:flex-row gap-4">
          <Categories />
          <Filter />
        </div>
        <Layout.Content className="flex flex-col px-[50px]">
          <h1 className="text-3xl mb-5">Все пиццы</h1>
          <div className="flex flex-wrap gap-10 py-5 items-start justify-center">
            {status === Status.FAILED ? (
              <div>
                <h2 className="text-3xl font-extralight">
                  Произошло ошибка <span>🍕</span>
                </h2>
              </div>
            ) : status === Status.LOADING ? (
              <>
                <PizzaSkeleton />
                <PizzaSkeleton />
                <PizzaSkeleton />
              </>
            ) : (
              pizzas.map((item, i) => <Pizza key={i} item={item} />)
            )}
          </div>
        </Layout.Content>
        <Layout.Footer className="rounded-xl bg-white border">
          Footer
        </Layout.Footer>
      </Layout>
    </>
  );
};

export default Home;
