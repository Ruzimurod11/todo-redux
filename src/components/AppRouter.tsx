import React from "react";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";
import { useAuthContext } from "../context";

const AppRouter: React.FC = () => {
   const { isAuth } = useAuthContext();

   console.log(isAuth);
   return isAuth ? (
      <Routes>
         {privateRoutes?.map((route) => {
            return (
               <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
               />
            );
         })}
      </Routes>
   ) : (
      <Routes>
         {publicRoutes?.map((route) => {
            return (
               <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
               />
            );
         })}
      </Routes>
   );
};

export default AppRouter;
