// import axios from 'axios'
import GithubService from '../../services/GithubService'

const state = {
    githux: {
        userdata: null,
        userrepos: null
    }
}

const getters = {
    getUserdata: (state) => state.githux.userdata,
    getUserrepos: (state) => state.githux.userrepos
}

const actions = {
    fetchUserdata({ commit }) {
        console.log('[Githuxjs module] Fetching userdata')
        GithubService.getUserData().then(data => {
            commit('setUserdata', data)
        })
    },

    fetchUserrepos({ commit }) {
        return new Promise((resolve) => {
            GithubService.getUserRepos().then(data => {
                commit('setUserrepos', data)
                resolve()
            })
        })
    }
}

const mutations = {
    setUserdata: (state, userdata) => { state.githux.userdata = userdata },
    setUserrepos: (state, userrepos) => { state.githux.userrepos = userrepos }
}

export default {
    state,
    getters,
    actions,
    mutations
}