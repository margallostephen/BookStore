import { createStore } from 'vuex';
import auth from './module/auth'
import books from './module/books';
import accounts from './module/accounts';
import cart from './module/cart';

export default createStore({
  modules: {
    auth,
    cart,
    books,
    accounts
  }
});
