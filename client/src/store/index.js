import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        swooosh: {},
        searchResult: {},
        analyticsEvents: {},
    },
    mutations: {
        setSwooosh: (state, payload) => (state.swooosh = payload),
        setSearchResult: (state, payload) => (state.searchResult = payload),
        setAnalyticsEvents: (state, payload) =>
            (state.analyticsEvents = payload),
    },
    actions: {
        setSwooosh: (state, payload) => state.commit('setSwooosh', payload),
        setSearchResult: (state, payload) =>
            state.commit('setSearchResult', payload),
        setAnalyticsEvents: (state, payload) =>
            state.commit('setAnalyticsEvents', payload),
    },
    getters: {
        getSwooosh: state => state.swooosh,
        getSearchResult: state => state.searchResult,
        getAnalyticsEvents: state => state.analyticsEvents,
    },
});
