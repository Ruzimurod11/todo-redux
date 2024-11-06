import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Login />} />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
