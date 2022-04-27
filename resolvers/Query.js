import { db } from "../data/db.js";

export const Query = {
    hello: (_, { name }) => `Hello ${name || "World"}`,
    getTodos: () => {
        return db.todos;
    },
    getTodoById: (_, { id }) => {
        const todo = db.todos.find((todo) => todo.id === id);
        if (!todo) {
            throw new Error(`Todo with id ${id} not found`);
        }
        return todo;
    },
    getUsers: () => {
        return db.users;
    },
    getUserById: (parent, { id }, info) => {
        const user = db.users.find((user) => user.id === id);
        if (!user) {
            throw new Error(`User with id ${id} not found`);
        }
        return user;
    },
};