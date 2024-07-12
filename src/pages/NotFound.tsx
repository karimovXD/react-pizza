import React from "react";

const NotFound: React.FC = () => {
  return (
    <>
      <h1 className="text-2xl font-semibold">
        Произошла ошибка <span>😕</span>
      </h1>
      <p className="text-secondary">
        К сожалению, не удалось получить питсы. Попробуйте повторить попытку
        позже.
      </p>
    </>
  );
};

export default NotFound;
