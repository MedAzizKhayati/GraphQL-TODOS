export const Mutation = {
    addTodo: (_, { addTodoInput }, { db, pubsub }) => {
        const newTodo = {id: db.todos[db.todos.length - 1].id + 1,...addTodoInput};
        if(!db.users.find((user) => user.id === addTodoInput.user)){
            throw new Error(`User with id ${addTodoInput.user} not found`);
        }
        newTodo.status = "WAITING"
        db.todos.push(newTodo);
        pubsub.publish('newTodo', {newTodo})
        return newTodo;
    },

    updateTodo: (_, { id, updateTodoInput }, { db, pubsub }) => {
        const todoIndex = db.todos.findIndex((todo) => todo.id === id);
        if (todoIndex === -1) {
            throw new Error(`Todo with id ${id} not found`);
        }
        console.log(updateTodoInput.user);
        if(updateTodoInput.user && !db.users.find((user) => user.id === updateTodoInput.user)){
            throw new Error(`User with id ${updateTodoInput.user} not found`);
        }
        const updatedTodo = {...db.todos[todoIndex], ...updateTodoInput};
        db.todos[todoIndex] = updatedTodo;
        pubsub.publish('todoUpdated', {updatedTodo})
        
        return updatedTodo;
    },

    deleteTodo: (_, { id }, { db, pubsub }) => {
        const todoIndex = db.todos.findIndex((todo) => todo.id === id);
        if (todoIndex === -1) {
            throw new Error(`Todo with id ${id} not found`);
        }
        const deletedTodo = db.todos.splice(todoIndex, 1)[0];
        pubsub.publish('todoDeleted', { deletedTodo });
        return deletedTodo;
    }
}