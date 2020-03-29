// import axios from 'axios'
import GithubService from '../../services/GithubService'

const state = {
    githux: {
        userdata: null,
        userrepos: null,
        usergists: null
    }
}

const getters = {
    getUserdata: (state) => state.githux.userdata,
    getUserrepos: (state) => state.githux.userrepos,
    getUsergists: (state) => state.githux.usergists
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
    },

    fetchUsergists({ commit }) {
        return new Promise((resolve) => {
            GithubService.getUserGists().then(data => {
                commit('setUsergists', data)
                resolve()
            })
        })
    },

    createUsergist({ commit }, gist) {
        return new Promise((resolve, reject) => {
            GithubService.createUserGist(gist.description, gist.public, gist.files).then(
                (response) => {
                    console.log("GIST SUCCESSFULY CREATED!")
                    console.log(response)
                    commit('addUsergist', response)
                    resolve()
                },
                (error) => {
                    console.log("ERROR WHILE CREATING GIST...")
                    console.log(error)
                    reject()
                }
            )
        })
    }
}

const mutations = {
    setUserdata: (state, userdata) => { state.githux.userdata = userdata },
    setUserrepos: (state, userrepos) => { state.githux.userrepos = userrepos },
    setUsergists: (state, usergists) => { state.githux.usergists = usergists },
    addUsergist: (state, gist) => {
        state.githux.usergists = { ...state.githux.usergists, gist }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}