import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { CgMenuMotion } from "react-icons/cg";
// import { useDispatch } from "react-redux";
import { useAppDispatch } from "../hook";
import { addTodo, clearTodos } from "../features/todoSlice";

const Header: React.FC = () => {
   const dispatch = useAppDispatch();
   const [todo, setTodo] = useState<string>("");

   const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const { value } = e.target;
      setTodo(value);
   };

   const handleAddTodo: React.FormEventHandler<HTMLFormElement> = (e) => {
      e.preventDefault();
      if (todo.trim() !== "") {
         dispatch(addTodo(todo));
         setTodo("");
      }
   };

   return (
      <form onSubmit={handleAddTodo} className="header container">
         <button type="submit" className="header__button button">
            <FaPlus /> Добавить
         </button>
         <input
            value={todo}
            onChange={handleChange}
            className="header__input"
            type="text"
            placeholder="Пополните список..."
         />
         <button
            onClick={() => dispatch(clearTodos())}
            className="header__clear button">
            Очистить <CgMenuMotion />
         </button>
      </form>
   );
};

export default Header;
