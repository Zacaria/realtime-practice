import Vue from 'vue';
import Vuex from 'vuex';
import nanoid from 'nanoid';
import faker from 'faker';

import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const peers = new Array(2).fill().map(() => ({
  id: nanoid(),
  name: faker.internet.userName(),
}));

export default new Vuex.Store({
  state: {
    messages: [],
    user: {
      name: undefined,
    },
    peers,
  },
  mutations,
  actions,
});
