/* eslint-disable no-console */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data1: [
            {first_name: 'Dickerson', dob: '2020-06-15'},
            {first_name: 'Larsen', dob: '2020-06-15'},
            {first_name: 'Geneva', dob: '2020-06-15'},
            {first_name: 'Jami', dob: '2020-06-15'}
        ],
        selectedData1: {id: 0, first_name: 'Dickerson', dob: '2020-06-15'},
    },
    mutations: {
        pushNewItemToData1(state, payload) {
            state.data1.push(payload)
        },
        updateSelectedData1(state, payload) {
            state.selectedData1 = payload
        },//MainPage
    },
    getters: {
        computedData1: state => state.data1,
        computedSelectedData1: state => state.selectedData1,

    },
})
