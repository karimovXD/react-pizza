import React from "react";
import { Select, ConfigProvider } from "antd";
//redux
import { useDispatch } from "react-redux";
import { setCategoryTitle } from "../redux/slices/filter/slice";
import { AppDispatch } from "../redux/store";

const Filter: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="flex items-center gap-2">
      <h3>Сортировка по:</h3>
      <ConfigProvider
        theme={{
          components: {
            Select: {
              colorPrimary: "#FE5F1E",
              colorPrimaryHover: "#FE5F1E",
            },
          },
        }}
      >
        <Select
          defaultValue="популярности"
          style={{ width: 125 }}
          onChange={(value: string) => dispatch(setCategoryTitle(value))}
          options={[
            { value: "rating", label: "популярности" },
            { value: "price", label: "по цене" },
            { value: "title", label: "по алфавиту" },
          ]}
        />
      </ConfigProvider>
    </div>
  );
};

export default Filter;
