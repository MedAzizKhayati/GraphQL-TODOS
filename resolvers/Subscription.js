export const Subscription = {
    todoAddition: {
        subscribe(parent, args, { pubsub }, info) {
            return pubsub.asyncIterator('todoAddition');
        }
    },

    todoDeletion: {
        subscribe(parent, args, { pubsub }, info) {
            return pubsub.asyncIterator('todoDeletion');
        }
    },

    todoUpdate: {
        subscribe(parent, args, { pubsub }, info) {
            return pubsub.asyncIterator('todoUpdate');
        }
    }
}