// import axios from 'axios'

const state = {
    githux: [
        {
            title: 'First'
        },
        {
            title: 'Second'
        }
    ]
}

const getters = {
    allGithux: (state) => state.githux
}

const actions = {
    async fetchGithux({ commit }) {
        let data = { title: 'Third' }

        commit('addGithux', data)
        // commit('setGithux', data)
    }
}

const mutations = {
    setGithux: (state, githux) => (state.githux = githux),
    addGithux: (state, githux) => {
        // console.log(githux)
        // state.githux.push(githux)

        state.githux =  { ...state.githux, githux }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}