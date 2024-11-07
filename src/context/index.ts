import { createContext, useContext } from "react";

type AuthContextProps = {
   isAuth: boolean;
   setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext<AuthContextProps | null>(null);

export function useAuthContext() {
   const context = useContext(AuthContext);

   if (!context) {
      throw new Error("useAuthContext must be used within a ContextProvider");
   }

   return context;
}
