import { db } from "../data/db.js";
export const User = {
    todos: ({ id }) => {
        return db.todos.filter((todo) => todo.user === id);
    },
};