import {api} from '../../utils/api';
import {storage} from '../../utils/storage';

const state = { 
  loggedIn: false
}

const mutations = {
  login (state, bool) {
    state.loggedIn = bool;
    if(!bool) {
      storage.clearValue('token');
      storage.clearValue('isGood');
    }
  }
}

const getters = {
  isLoggedIn (state) {
    return state.loggedIn
  }
}

const actions = {
  async usersignin ({commit, state}, user) {
  
  }
}

export default {
  state,
  actions,
  mutations,
  getters
};