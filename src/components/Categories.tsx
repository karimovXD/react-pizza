import React from "react";
//redux
import { useDispatch } from "react-redux";
import { setCategoryIndex } from "../redux/slices/filter/slice";

const Categories: React.FC = () => {
  const [categoryName, setCategoryName] = React.useState<"Все" | string>("Все");
  //redux
  const dispatch = useDispatch();

  const categories: string[] = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div>
      <ul className="flex items-center justify-start gap-3 flex-wrap overflow-auto">
        {categories.map((item: string, i: number) => (
          <li
            onClick={React.useCallback((): void => {
              setCategoryName(item);
              dispatch(setCategoryIndex(i));
            }, [])}
            className={`${
              categoryName === item ? "active" : ""
            } px-[15px] py-[5px] md:px-[25px] flex flex-col items-center justify-center md:py-[10px] bg-gray-50 font-medium rounded-[30px] text-[16px] md:text-[18px] cursor-pointer`}
            key={i}
          >
            <h3>{item}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
