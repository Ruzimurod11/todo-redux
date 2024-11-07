import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import { useEffect, useState } from "react";

const App = () => {
   const [isAuth, setIsAuth] = useState(false);

   useEffect(() => {
      if (localStorage.getItem("auth")) {
         setIsAuth(true);
      }
   }, []);
   return (
      <AuthContext.Provider
         value={{
            isAuth,
            setIsAuth,
         }}>
         <BrowserRouter>
            <AppRouter />
         </BrowserRouter>
      </AuthContext.Provider>
   );
};

export default App;
