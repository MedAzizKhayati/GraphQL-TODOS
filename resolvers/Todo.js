import { db } from "../data/db.js";
export const Todo = {
    user: ({ user }) => {
        return db.users.find((u) => u.id === user);
    },
};