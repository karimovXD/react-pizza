import React from "react";
import { Skeleton } from "antd";

const PizzaSkeleton: React.FC = () => {
  return (
    <>
      <div className="w-full ss:w-[200px] sm:w-[280px] flex flex-col items-center justify-center">
        <Skeleton.Avatar active size={200} /> <br />
        <Skeleton.Input active block /> <br />
        <Skeleton active paragraph={{ rows: 2 }} />
      </div>
    </>
  );
};

export default PizzaSkeleton;
