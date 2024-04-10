export default {
  state: {
    accounts: []
  },
  getters: {
    accounts: state => state.accounts
  },
  mutations: {
    addAccount(state, newAcc) {
      state.accounts.push(newAcc);
    }
  }
};
