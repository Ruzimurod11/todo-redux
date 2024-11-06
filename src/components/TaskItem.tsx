import { FC } from "react";
import { FaCheck } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoComplete } from "../features/todoSlice";
import { ITodo } from "../types/data";

const TasksItem: FC<ITodo> = ({ title, id, completed }) => {
   const dispatch = useDispatch();

   return (
      <div className="tasks__item">
         <p
            style={
               completed
                  ? { textDecoration: "line-through", opacity: 0.6 }
                  : { textDecoration: "none" }
            }>
            {title}
         </p>
         <div className="tasks__icons icon">
            <div
               defaultChecked={completed}
               onClick={() => dispatch(toggleTodoComplete(id))}>
               <FaCheck className="icn icon__check" />
            </div>

            <button
               onClick={() => dispatch(removeTodo(id))}
               className="btn btn__del">
               <MdDelete className="icn icon__delete" />
            </button>
         </div>
      </div>
   );
};

export default TasksItem;

// Купить молоко
