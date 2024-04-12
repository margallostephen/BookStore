export default {
    actions: {
        addToCart({ rootState }, book) {
            const { cart } = rootState.auth.user;
            const foundedBook = cart.find(currBook => book.id === currBook.book.id);

            foundedBook ? foundedBook.quantity++ : cart.push({ book, quantity: 1 });
        },
        removeToCart({ rootState }, index) {
            rootState.auth.user.cart.splice(index, 1);
        }
    }
};
