export default {
    state: {
        cartTotal: 0,
        itemCount: 0
    },
    mutations: {
        SET_CART_TOTAL(state, total) {
            state.cartTotal = total;
        },
        SET_ITEM_COUNT(state, count) {
            state.itemCount = count;
        }
    },
    actions: {
        addToCart({ rootState, commit }, book) {
            const { cart } = rootState.auth.user;
            const foundedBook = cart.find(currBook => book.id === currBook.book.id);

            foundedBook ? foundedBook.quantity++ : cart.push({ book, quantity: 1 });

            const cartTotal = cart.reduce((total, item) => total + (item.book.price * item.quantity), 0);
            const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

            console.log(cartTotal)
            console.log(itemCount)

            commit('SET_CART_TOTAL', cartTotal);
            commit('SET_ITEM_COUNT', itemCount);
        },
        removeToCart({ rootState, commit }, index) {
            rootState.auth.user.cart.splice(index, 1);

            const cartTotal = rootState.auth.user.cart.reduce((total, item) => total + (item.book.price * item.quantity), 0);
            const itemCount = rootState.auth.user.cart.reduce((total, item) => total + item.quantity, 0);

            console.log(cartTotal)
            console.log(itemCount)

            commit('SET_CART_TOTAL', cartTotal);
            commit('SET_ITEM_COUNT', itemCount);
        }
    }
};
