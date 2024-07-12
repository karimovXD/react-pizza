import { lazy, Suspense, FC } from "react";
import { Routes, Route } from "react-router-dom";

//pages
const Cart = lazy(() => import("./pages/Cart"));
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App: FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Идёт загрузка...</div>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/cart"
        element={
          <Suspense fallback={<div>Идёт загрузка...</div>}>
            <Cart />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<div>Идёт загрузка...</div>}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default App;
