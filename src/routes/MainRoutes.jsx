import React from "react";
import MainPage from "../Pages/MainPage";
import { Route, Routes } from "react-router";

const MainRoutes = () => {
  const routes = [{ link: "/", element: <MainPage />, id: 1 }];
  return (
    <Routes>
      {routes.map((item) => (
        <Route key={item.id} path={item.link} element={item.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
