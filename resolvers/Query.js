export const Query = {
    hello: (_, { name }) => `Hello ${name || "World"}`,
    getTodos: (_, __, {db}) => {
        return db.todos;
    },
    getTodoById: (_, { id }, {db}) => {
        const todo = db.todos.find((todo) => todo.id === id);
        if (!todo) {
            throw new Error(`Todo with id ${id} not found`);
        }
        return todo;
    },
    getUsers: (_, __, {db}) => {
        return db.users;
    },
    getUserById: (_, { id }, {db}) => {
        const user = db.users.find((user) => user.id === id);
        if (!user) {
            throw new Error(`User with id ${id} not found`);
        }
        return user;
    },
};