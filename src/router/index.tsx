import Home from "../pages/Home";
import Login from "../pages/Login";

export const privateRoutes = [
   { path: "*", name: "Home", element: <Home />, isPrivate: true },
   { path: "/", name: "Home", element: <Home />, isPrivate: true },
];

export const publicRoutes = [
   { path: "/login", name: "Login", element: <Login />, isPrivate: false },
   { path: "/", name: "Login", element: <Login />, isPrivate: false },
];
