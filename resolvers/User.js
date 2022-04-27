export const User = {
    todos: ({ id }, _, { db }) => {
        return db.todos.filter((todo) => todo.user === id);
    },
};