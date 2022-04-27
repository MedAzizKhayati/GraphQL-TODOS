export const Todo = {
    user: ({ user }, _, {db}) => {
        return db.users.find((u) => u.id === user);
    },
};