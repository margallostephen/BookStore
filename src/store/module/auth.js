export default {
    state: {
        isAuthenticated: false,
        user: null
    },
    getters: {
        isAuthenticated: state => state.isAuthenticated,
        user: state => state.user
    },
    mutations: {
        setAuthenticated: (state, isAuthenticated) => state.isAuthenticated = isAuthenticated,
        setUser: (state, user) => state.user = user
    },
    actions: {
        async login({ commit, rootState }, userData) {
            const foundAccount = rootState.accounts.accounts.find(acc => acc.email === userData.email && acc.password === userData.password);
            if (foundAccount) {
                commit('setAuthenticated', true);
                commit('setUser', { username: foundAccount.username, cart: foundAccount.cart });
                return true;
            } 

            return false;
        },
        logout: ({ commit }) => {
            commit('setAuthenticated', false);
            commit('setUser', null);
        }
    }
};
