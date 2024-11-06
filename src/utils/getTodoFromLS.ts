export const getTodoFromLS = () => {
   const data = localStorage.getItem("todos");
   return data ? JSON.parse(data) : [];
};
