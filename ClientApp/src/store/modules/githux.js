// import axios from 'axios'
import GithubService from '../../services/GithubService'

const state = {
    githux: {
        userdata: null
    }
}

const getters = {
    // allGithux: (state) => state.githux
    getUserdata: (state) => state.githux.userdata
}

const actions = {
    fetchUserdata({ commit }) {
        console.log('[Githuxjs module] Fetching userdata')
        GithubService.getUserData().then(data => {
            commit('setUserdata', data)
        })
    }
}

const mutations = {
    setUserdata: (state, userdata) => { state.githux.userdata = userdata }
}

export default {
    state,
    getters,
    actions,
    mutations
}