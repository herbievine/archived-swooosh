import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// TODO: Theme manager

export default new Vuex.Store({
    state: {
        swooosh: {},
    },
    mutations: {
        setSwooosh: (state, payload) => (state.swooosh = payload),
    },
    actions: {
        setSwooosh: (state, payload) => state.commit('setSwooosh', payload),
    },
    getters: {
        getSwooosh: (state) => state.swooosh,
    },
});
