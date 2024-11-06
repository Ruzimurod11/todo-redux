import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTodoFromLS } from "../utils/getTodoFromLS";

type Todo = {
   id: number;
   title: string;
   completed: boolean;
};

type TodosState = {
   todos: Todo[];
};

const initialState: TodosState = {
   todos: getTodoFromLS(),
};

export const todoSlice = createSlice({
   name: "todo",
   initialState,
   reducers: {
      addTodo: (state, action: PayloadAction<string>) => {
         const taskTodo = {
            id: Math.random() * 100,
            title: action.payload,
            completed: false,
         };

         state.todos = [taskTodo, ...state.todos];
      },
      removeTodo: (state, action: PayloadAction<number>) => {
         state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      },
      toggleTodoComplete: (state, action: PayloadAction<number>) => {
         const toggleTodo = state.todos.find((e) => e.id === action.payload)!;
         toggleTodo.completed = !toggleTodo.completed;
      },
      clearTodos: (state) => {
         state.todos = [];
         localStorage.clear();
      },
   },
});

export const { addTodo, removeTodo, clearTodos, toggleTodoComplete } =
   todoSlice.actions;
