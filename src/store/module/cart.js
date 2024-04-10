export default {
    actions: {
        addToCart({ rootState }, book) {
            rootState.auth.user.cart.push(book);
        },
        removeToCart({ rootState }, index) {
            rootState.auth.user.cart.splice(index, 1);
        }
    }
};
