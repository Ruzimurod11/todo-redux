import { useState, useEffect, useRef } from "react";
// import { useSelector } from "react-redux";
import { useAppSelector } from "../hook";
import TasksItem from "./TaskItem";
import { ITodo } from "../types/data";

const Tasks = () => {
   const [done, setDone] = useState("");
   const isMounted = useRef<boolean>(false);

   const { todos } = useAppSelector((store) => store.todo);

   useEffect(() => {
      if (isMounted.current) {
         const json = JSON.stringify(todos);
         localStorage.setItem("todos", json);
      }
      isMounted.current = true;
   }, [todos]);

   let copyTodos: ITodo[] = todos;
   let currentNumber = copyTodos.filter((e) => e.completed === false).length;
   let completedNumber = copyTodos.filter((e) => e.completed === true).length;

   switch (done) {
      case "All":
         copyTodos = todos;
         break;
      case "Current":
         copyTodos = todos.filter((e) => e.completed === false);
         break;
      case "Completed":
         copyTodos = todos.filter((e) => e.completed === true);
         break;
      default:
         break;
   }

   return (
      <div className="tasks container">
         <div className="tasks__btn">
            <button
               onClick={() => setDone("Current")}
               className={done === "Current" ? "page" : ""}>
               Текущие дела ({currentNumber})
            </button>
            <button
               className={done === "All" ? "page" : ""}
               onClick={() => setDone("All")}>
               Все дела ({todos.length})
            </button>
            <button
               className={done === "Completed" ? "page" : ""}
               onClick={() => setDone("Completed")}>
               Выполненные дела ({completedNumber})
            </button>
            <button>Корзина</button>
         </div>
         {copyTodos?.map((todo) => (
            <TasksItem {...todo} key={todo.id} />
         ))}
      </div>
   );
};

export default Tasks;
