
import Vue from 'vue'
import Vuex from 'vuex'

import githux from './modules/githux'
import auth from './modules/auth'

import 'es6-promise/auto'

// LOAD VUEX
Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        githux,
        auth
    }
})